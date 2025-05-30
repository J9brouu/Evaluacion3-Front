
import './App.css'
import { Box } from "@mui/material"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Divider from './components/Divider.jsx'
import Banner from './components/Banner.jsx'
import Productos from './pages/Productos.jsx'
import Formulario from './pages/Formulario.jsx'
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import InfoCards from './components/InfoCards.jsx'
import Faqs from './pages/Faqs.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Box sx={{ mb: 6 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Divider />
                <Home />
              </>
            }
          />
          <Route path="/productos" element={<Productos />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </Box>
       <Box sx={{ mb: 6 }}>
        <InfoCards />
      </Box>
      <Footer />
    </Router>
  )
}

export default App