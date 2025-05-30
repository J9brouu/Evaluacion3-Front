import { Box, Typography } from "@mui/material";

// Footer component
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#012d3e', color: '#fff', py: 2, textAlign: 'center' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: 'stretch', // Cambia a stretch para que ocupen todo el ancho en columna
                    gap: { xs: 2, sm: 4 },
                    width: '100%',
                    px: { xs: 1, sm: 2 },
                    maxWidth: '100vw', // Asegura que nunca se pase del viewport
                    boxSizing: 'border-box'
                }}
            >
                {/* Instagram */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: 0,
                    width: '100%', // Ocupa todo el ancho en XS
                    flex: { xs: 'unset', sm: 1 }
                }}>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 40 40"
                        style={{ marginBottom: 8, maxWidth: '100%' }}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="4" y="4" width="32" height="32" rx="8" stroke="white" strokeWidth="2" fill="none" />
                        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" fill="none" />
                        <circle cx="28" cy="12" r="2" fill="white" />
                    </svg>
                    <Typography variant="body2" color="inherit" sx={{ wordBreak: 'break-all', fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                        INSTAGRAM
                    </Typography>
                    <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                        ANTIGUEDADES.STHANDIER
                    </Typography>
                </Box>
                {/* Dirección */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: 0,
                    width: '100%',
                    flex: { xs: 'unset', sm: 1 }
                }}>
                    <img src="src/assets/direccion.png" alt="Dirección" style={{ width: 32, height: 32, marginBottom: 8, maxWidth: '100%' }} />
                    <Typography variant="body2" color="inherit" sx={{ wordBreak: 'break-word', fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                        AV. EUCALIPTUS 1809, 2060489 LA LAGUNA, ZAPALLAR, VALPARAISO
                    </Typography>
                </Box>
                {/* Teléfono */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: 0,
                    width: '100%',
                    flex: { xs: 'unset', sm: 1 }
                }}>
                    <img src="src/assets/telefono.png" alt="Teléfono" style={{ width: 32, height: 32, marginBottom: 8, maxWidth: '100%' }} />
                    <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                        WHATSAPP
                    </Typography>
                    <Typography variant="body2" color="inherit" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                        +56 9 6494 5444
                    </Typography>
                </Box>
            </Box>
            {/* Mapa de Google Maps */}
            <Box sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                overflowX: 'auto'
            }}>
                <Box sx={{ width: { xs: '100%', sm: 400, md: 500 }, maxWidth: '100%', mx: 'auto' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.2314455161254!2d-71.43140530159386!3d-32.62665947361727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689ba4d24731f79%3A0xe8e96223902f4120!2sAv.%20Eucaliptus%201809%2C%202060489%20La%20Laguna%2C%20Zapallar%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1748568672524!5m2!1ses!2scl"
                        width="100%"
                        height="220"
                        style={{ border: 0, borderRadius: 8, maxWidth: '100%' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de Antiguedades Sthandier"
                    ></iframe>
                </Box>
            </Box>
            <Typography sx={{ mt: 2, fontSize: { xs: '0.85rem', sm: '1rem' } }} variant="body1" color="inherit">
                © 2025 Antigüedades Sthandier. Todos los derechos reservados.
            </Typography>
        </Box>
    );
}

export default Footer;