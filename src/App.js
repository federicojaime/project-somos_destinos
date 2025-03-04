// src/App.js
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import AboutUs from './components/AboutUs';
import Experiences from './components/Experiences';
import Styles from './components/Styles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { initAOS, initGSAPAnimations, initSmoothScrolling } from './utils/animations';

// Componente principal que organiza toda la aplicación
const App = () => {
  // Inicializar animaciones cuando se monta el componente
  useEffect(() => {
    // Inicializar AOS para animaciones de scroll
    initAOS();
    
    // Inicializar animaciones GSAP
    initGSAPAnimations();
    
    // Inicializar smooth scrolling para navegación
    initSmoothScrolling();
    
    // WhatsApp flotante
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/2665047934';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.setAttribute('aria-label', 'Contactar por WhatsApp');
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);
    
    // Limpieza al desmontar
    return () => {
      if (whatsappBtn && whatsappBtn.parentNode) {
        whatsappBtn.parentNode.removeChild(whatsappBtn);
      }
    };
  }, []);

  return (
    <>
      {/* Header con navegación */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Destinos Populares */}
      <Destinations />
      
      {/* Sobre Nosotros - Nueva sección */}
      <AboutUs />
      
      {/* Experiencias Únicas */}
      <Experiences />
      
      {/* Estilos de Viaje */}
      <Styles />
      
      {/* Contacto */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
      {/* Modal para destinos */}
      <Modal />
    </>
  );
};

export default App;