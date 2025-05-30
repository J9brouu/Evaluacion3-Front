import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const InfoCards = () => (
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <CardMedia
          component="img"
          height="220"
          image="/src/assets/productos.png"
          alt="Pieza única"
          sx={{ objectFit: 'contain', objectPosition: 'center', display: 'block', mx: 'auto', my: 2 }}
        />
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            Productos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Encuentra antigüedades exclusivas y con historia para tu colección o decoración.
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0, width: '100%' }}>
          <Button
            component={Link}
            to="/productos"
            variant="contained"
            color="primary"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              fontSize: { xs: '0.95rem', sm: '1rem' }
            }}
          >
            Ver productos
          </Button>
        </Box>
      </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <CardMedia
          component="img"
          height="220"
          image="/src/assets/aboutus.png"
          alt="Atención personalizada"
          sx={{ objectFit: 'contain', objectPosition: 'center', display: 'block', mx: 'auto', my: 2 }}
        />
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            Sobre Nosotros
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Conoce nuestro compromiso con la calidad y la pasión por las antigüedades.
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0, width: '100%' }}>
          <Button
            component={Link}
            to="/AboutUs"
            variant="contained"
            color="primary"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              fontSize: { xs: '0.95rem', sm: '1rem' }
            }}
          >
            Saber mas
          </Button>
        </Box>
      </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <CardMedia
          component="img"
          height="220"
          image="/src/assets/faqs.png"
          alt="Ambiente acogedor"
          sx={{ objectFit: 'contain', objectPosition: 'center', display: 'block', mx: 'auto', my: 2 }}
        />
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            Preguntas Frecuentes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Resuelve tus dudas sobre nuestros productos, envíos y políticas de compra.
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0, width: '100%' }}>
           <Button
            component={Link}
            to="/faqs"
            variant="contained"
            color="primary"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              fontSize: { xs: '0.95rem', sm: '1rem' }
            }}
          >
            Ver Preguntas
          </Button>
        </Box>
      </Card>
    </Grid>
  </Grid>
);

export default InfoCards;