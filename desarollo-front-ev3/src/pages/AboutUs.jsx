import { Box, Typography, CircularProgress, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";

import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png';
import product10 from '../assets/product10.png';
import product11 from '../assets/product11.png';
import product12 from '../assets/product12.png';

const itemData = [
    { img: product1, title: 'Producto 1' },
    { img: product2, title: 'Producto 2' },
    { img: product3, title: 'Producto 3' },
    { img: product4, title: 'Producto 4' },
    { img: product5, title: 'Producto 5' },
    { img: product6, title: 'Producto 6' },
    { img: product7, title: 'Producto 7' },
    { img: product8, title: 'Producto 8' },
    { img: product9, title: 'Producto 9' },
    { img: product10, title: 'Producto 10' },
    { img: product11, title: 'Producto 11' },
    { img: product12, title: 'Producto 12' },
];

const AboutUs = () => {
    const [about, setAbout] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/about-us/", {
            headers: {
                Authorization: "Bearer ipss.get",
            },
        })
            .then(res => res.json())
            .then(data => {
                setAbout(data?.data || "");
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Box sx={{ p: 4, textAlign: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                p: { xs: 2, sm: 4 },
                minHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                maxWidth: 2000,
                mx: "auto"
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem" } }}>
                Sobre Nosotros
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "1rem", sm: "1.15rem" }, mb: 4 }}>
                {about ? about : "No hay información disponible."}
            </Typography>
            <ImageList variant="masonry" cols={3} gap={8} sx={{ width: "100%", maxWidth: 900 }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderRadius: 8 }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default AboutUs;