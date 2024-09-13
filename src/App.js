import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import DetallesProyecto from "./components/DetallesProyecto";
import Home from "./components/Home";
import Tecnologias from "./components/Tecnologias";
import Contacto from "./components/Contacto";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Proyectos />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/service/:id" element={<DetallesProyecto />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
