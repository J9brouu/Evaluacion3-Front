import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
  // Scroll suave al hacer clic
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const becasSection = document.getElementById('becas');
    if (becasSection) {
      becasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
  sx={{
    height: { xs: '40vh', sm: '50vh', md: '60vh' },
    minHeight: { xs: 220, sm: 300, md: 400 },
    position: 'relative',
    backgroundImage: 'url(/src/assets/banner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    px: { xs: 0, sm: 2, md: 4 }, // Padding horizontal responsivo
  }}
>
  {/* Capa de transparencia */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 1,
    }}
  />
  {/* Contenido */}
  <Box
    sx={{
      position: 'relative',
      zIndex: 2,
      px: { xs: 1, sm: 2, md: 4 },
      width: { xs: '95%', sm: '80%', md: '60%' }, // Ancho responsivo
      mx: 'auto',
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontWeight: 'bold',
        mb: { xs: 1, sm: 2 },
        fontSize: { xs: '1.5rem', sm: '2.2rem', md: '3rem' }, // Ajuste de tamaño
        lineHeight: 1.1,
        wordBreak: 'break-word', // Evita desbordes
      }}
    >
      Antigüedades Sthandier
    </Typography>
    <Typography
      variant="h6"
      sx={{
        mb: { xs: 2, sm: 4 },
        fontSize: { xs: '0.95rem', sm: '1.15rem', md: '1.5rem' },
        wordBreak: 'break-word',
      }}
    >
      Descubre la elegancia y la historia en cada pieza
    </Typography>
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{
        fontSize: { xs: '0.85rem', sm: '1rem' },
        px: { xs: 2, sm: 4 },
        py: { xs: 1, sm: 1.5 },
        width: { xs: '100%', sm: 'auto' }, // Botón ocupa todo el ancho en móvil
      }}
      onClick={handleSmoothScroll}
    >
      Conoce más
    </Button>
  </Box>
</Box>
  );
};

export default Banner;
