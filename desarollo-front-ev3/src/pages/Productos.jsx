import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Grid, Card, CardContent, CardMedia, CircularProgress, Dialog } from "@mui/material";


const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openImg, setOpenImg] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/products-services/", {
      headers: {
        Authorization: "Bearer ipss.get",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data && Array.isArray(data.data.productos)) {
          setProductos(data.data.productos);
        } else {
          setProductos([]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Productos Disponibles
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {productos.map((producto) => (
          <Grid item xs={12} sm={6} md={4} key={producto.id} display="flex" justifyContent="center">
            <Card sx={{ height: "100%", maxWidth: 345, margin: "0 auto" }}>
              {producto.imgs && producto.imgs.length > 0 && (
                <CardMedia
                  component="img"
                  height="180"
                  image={producto.imgs[0]}
                  alt={producto.nombre}
                  sx={{ objectFit: "contain", p: 2, cursor: "pointer" }}
                  onClick={() => {
                    setImgSrc(producto.imgs[0]);
                    setOpenImg(true);
                  }}
                />
              )}
              {/* Miniaturas de imágenes adicionales */}
              {producto.imgs && producto.imgs.length > 1 && (
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}>
                  {producto.imgs.slice(1).map((img, idx) => (
                    <Box
                      key={idx}
                      component="img"
                      src={img}
                      alt={producto.nombre + " mini " + idx}
                      sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: 1, border: "1px solid #eee", cursor: "pointer" }}
                      onClick={() => {
                        setImgSrc(img);
                        setOpenImg(true);
                      }}
                    />
                  ))}
                </Box>
              )}
              <CardContent>
                <Typography variant="h6">{producto.nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {producto.descripcion}
                </Typography>
                {Array.isArray(producto.precios) && producto.precios.length > 0 ? (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="subtitle1">Precios:</Typography>
                    {producto.precios.map((p, idx) => (
                      <Typography key={idx} variant="body2">
                        {p.Nombre}: ${p.precio}
                      </Typography>
                    ))}
                  </Box>
                ) : producto.precio ? (
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    Precio: ${producto.precio}
                  </Typography>
                ) : null}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body1">
          Para realizar una compra puedes reservar el producto por 24hrs,
          para reservar el producto haz click
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/formulario"
          sx={{ mt: 2 }}
        >
          RESERVAR
        </Button>
      </Box>
      {/* Modal para mostrar la imagen en grande */}
      <Dialog open={openImg} onClose={() => setOpenImg(false)} maxWidth="md">
        <Box sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={imgSrc} alt="Producto grande" style={{ maxWidth: "90vw", maxHeight: "80vh" }} />
        </Box>
      </Dialog>

    </Box>
    
  );
};

export default Productos;