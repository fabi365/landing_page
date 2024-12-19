import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importamos React Router
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Fondo from "./assets/Fondo.jpeg";

// Importar las páginas
import Inicio from "./pages/Inicio";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";

function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",  
    opacity: 0.80,
  };

  return (
    <Router> {/* Configuramos el Router aquí */}
      <div style={bgImagen} className="overflow-hidden min-h-screen">
        <Navbar />
        <Routes>
          {/* Definir las rutas para cada página */}
          <Route path="/" element={<Inicio />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Hero />
      </div>
    </Router>
  );
}

export default App;
