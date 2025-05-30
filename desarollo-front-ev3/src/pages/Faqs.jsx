import { Box, Typography, CircularProgress, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";

const Faqs = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/faq/", {
            headers: {
                Authorization: "Bearer ipss.get",
            },
        })
            .then(res => res.json())
            .then(data => {
                setFaqs(data?.data || []);
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
        <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 800, mx: "auto" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
                Preguntas Frecuentes
            </Typography>
            {faqs.length === 0 ? (
                <Typography>No hay preguntas frecuentes disponibles.</Typography>
            ) : (
                faqs.map((faq) => (
                    <Accordion key={faq.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: "bold" }}>{faq.titulo}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.respuesta}</Typography>
                            {faq.id === 1 && (
                                <Box sx={{ mt: 2, textAlign: "center" }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.2317847654413!2d-71.43125509790731!3d-32.626650437773904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689ba4d24731f79%3A0xe8e96223902f4120!2sAv.%20Eucaliptus%201809%2C%202060489%20La%20Laguna%2C%20Zapallar%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1748638690341!5m2!1ses!2scl"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0, borderRadius: 8 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación"
                                    ></iframe>
                                </Box>
                            )}
                            {faq.id === 2 && (
                                <Box sx={{ mt: 2, textAlign: "center" }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href="https://www.instagram.com/antiguedades.sthandier/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Ir a Instagram
                                    </Button>
                                </Box>
                            )}
                            {faq.id === 3 && (
                                <Box sx={{ mt: 2, textAlign: "center" }}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        href="https://wa.me/56964945444"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Escribir por WhatsApp
                                    </Button>
                                </Box>
                            )}
                        </AccordionDetails>
                    </Accordion>
                ))
            )}
        </Box>
    );
};

export default Faqs;