import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box id="becas" sx={{ px: { xs: 1, sm: 2, md: 4 }, py: { xs: 2, sm: 3 } }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2.1rem' } }} gutterBottom>
                ¡Bienvenidos a Antigüedades Sthandier!
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }} paragraph>
                Nos alegra recibirte en nuestro espacio, donde cada objeto tiene una historia y cada visita es especial. Descubre piezas únicas, revive recuerdos y encuentra ese tesoro perfecto para tu hogar. ¡Déjate sorprender y disfruta comprando con nosotros! Estamos aquí para ayudarte a encontrar lo que buscas y hacer de tu experiencia algo inolvidable.
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }} paragraph>
                ¡Gracias por elegirnos y esperamos que disfrutes de tu visita!
            </Typography>
         
            
        </Box>
    );
};

export default Home;