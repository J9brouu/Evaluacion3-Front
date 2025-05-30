import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#012d3e',
          overflow: 'hidden', // Previene línea blanca por desborde
          boxShadow: 'none'
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            px: { xs: 0, sm: 3 }, // Sin padding horizontal en XS
            minHeight: { xs: 56, sm: 64 }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
            <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <Avatar
                alt="Logo"
                src="src/assets/logo.png"
                sx={{
                  marginRight: 1,
                  width: { xs: 32, sm: 44, md: 48 },
                  height: { xs: 32, sm: 44, md: 48 }
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  ml: 1,
                  flexShrink: 1
                }}
              >
                Antigüedades Sthandier
              </Typography>
            </RouterLink>
          </Box>
          {/* Enlaces de navegación (ocultos en xs) */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', flexShrink: 0 }}>
            <Link href="/" color="inherit" underline="none" sx={{ marginRight: 2, fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Inicio
            </Link>
            <Link href="/Productos" color="inherit" underline="none" sx={{ marginRight: 2, fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Productos
            </Link>
            <Link href="/AboutUs" color="inherit" underline="none" sx={{ marginRight: 2, fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Sobre Nosotros
            </Link>
            <Link href="/faqs" color="inherit" underline="none" sx={{ fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Preguntas Frecuentes
            </Link>
          </Box>
          {/* Botón menú hamburguesa en móvil */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: 'block', sm: 'none' },
              mr: { xs: 1, sm: 0 } // Un pequeño margen derecho en XS si lo deseas
            }}
            aria-label="menu"
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer para navegación móvil */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: '100%', maxWidth: '100vw', margin: 0 }
        }}
      >
        <List sx={{ width: '100%', maxWidth: 420, mx: 'auto', py: 2 }}>
          <ListItem button component="a" href="#" onClick={toggleDrawer(false)} sx={{ py: 2 }}>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button component="a" href="#contacto" onClick={toggleDrawer(false)} sx={{ py: 2 }}>
            <ListItemText primary="Productos" />
          </ListItem>
          <ListItem button component="a" href="#opcion3" onClick={toggleDrawer(false)} sx={{ py: 2 }}>
            <ListItemText primary="Sobre Nosotros" />
          </ListItem>
          <ListItem button component="a" href="#opcion3" onClick={toggleDrawer(false)} sx={{ py: 2 }}>
            <ListItemText primary="Preguntas Frecuentes" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;