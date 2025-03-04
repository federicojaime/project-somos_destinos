import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper/bundle';
import AOS from 'aos';
import Typed from 'typed.js';

// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger);

// Inicializar AOS para animaciones de scroll
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Inicializar la aplicación
document.querySelector('#app').innerHTML = `
  <!-- Botón flotante de WhatsApp -->
  <a href="https://wa.me/2665047934" target="_blank" class="whatsapp-float" aria-label="Contactar por WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>

  <!-- Header con navegación -->
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <div class="h-10 w-10 rounded-lg bg-gradient-to-r from-primary to-[#FF8E8E] flex items-center justify-center text-white font-bold">AR</div>
        <span class="text-xl font-bold text-primary">Descubre Argentina</span>
      </div>

      <nav class="hidden md:flex space-x-8">
        <a href="#home" class="nav-link active">Inicio</a>
        <a href="#destinations" class="nav-link">Destinos</a>
        <a href="#experiences" class="nav-link">Experiencias</a>
        <a href="#styles" class="nav-link">Estilos de Viaje</a>
        <a href="#contact" class="nav-link">Contacto</a>
      </nav>

      <button class="md:hidden text-dark focus:outline-none" id="mobile-menu-btn">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </div>
  </header>

  <!-- Menú móvil -->
  <div class="fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out" id="mobile-menu">
    <div class="container mx-auto px-6 py-8 h-full flex flex-col">
      <div class="flex justify-end mb-8">
        <button id="mobile-menu-close" class="text-dark focus:outline-none">
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>
      
      <nav class="flex flex-col space-y-6 items-center text-xl font-semibold">
        <a href="#home" class="mobile-nav-link active">Inicio</a>
        <a href="#destinations" class="mobile-nav-link">Destinos</a>
        <a href="#experiences" class="mobile-nav-link">Experiencias</a>
        <a href="#styles" class="mobile-nav-link">Estilos de Viaje</a>
        <a href="#contact" class="mobile-nav-link">Contacto</a>
      </nav>
      
      <div class="mt-auto flex justify-center">
        <a href="https://wa.me/2665047934" target="_blank" class="btn btn-primary mt-8 btn-with-icon">
          <i class="fab fa-whatsapp"></i>
          <span>Contactar ahora</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Hero Section -->
  <section id="home" class="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-2xl" data-aos="fade-right" data-aos-delay="200">
        <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight mb-6" id="hero-title">Descubre la magia de Argentina</h1>
        <p class="text-xl text-white/90 mb-8">Explora paisajes impresionantes, cultura vibrante y experiencias inolvidables en uno de los países más diversos de Sudamérica.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#destinations" class="btn btn-primary">
            Explorar destinos
          </a>
          <a href="#contact" class="btn btn-outline">
            Contactar
          </a>
        </div>
      </div>
    </div>
    <div class="decoration decoration-1"></div>
    <div class="decoration decoration-2"></div>
  </section>

  <!-- Destinos Populares -->
  <section id="destinations" class="py-20 bg-light">
    <div class="container mx-auto px-6">
      <h2 class="section-title" data-aos="fade-up">Destinos Populares</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Descubre los lugares más impresionantes de Argentina, desde las cataratas del Iguazú hasta los glaciares de la Patagonia.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Destino 1 -->
        <div class="destination-card group" data-aos="fade-up" data-aos-delay="200" data-destination-id="0">
          <div class="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1610993302487-6dbfc5eb0ece?q=80&w=1470&auto=format&fit=crop" 
              alt="Cataratas del Iguazú" 
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                  <i class="fas fa-star text-yellow-400"></i>
                  <span>4.9</span>
                </div>
                <span>Misiones</span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Cataratas del Iguazú</h3>
            <p class="text-gray-600 mb-4">Una de las maravillas naturales más impresionantes del mundo, con más de 275 saltos de agua.</p>
            <button class="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver más detalles <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Destino 2 -->
        <div class="destination-card group" data-aos="fade-up" data-aos-delay="300" data-destination-id="1">
          <div class="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1470&auto=format&fit=crop" 
              alt="Glaciar Perito Moreno" 
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                  <i class="fas fa-star text-yellow-400"></i>
                  <span>4.8</span>
                </div>
                <span>Santa Cruz</span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Glaciar Perito Moreno</h3>
            <p class="text-gray-600 mb-4">Un impresionante glaciar de 250 km² y 30 km de longitud, uno de los pocos glaciares en crecimiento.</p>
            <button class="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver más detalles <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Destino 3 -->
        <div class="destination-card group" data-aos="fade-up" data-aos-delay="400" data-destination-id="2">
          <div class="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=1470&auto=format&fit=crop" 
              alt="Buenos Aires" 
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                  <i class="fas fa-star text-yellow-400"></i>
                  <span>4.7</span>
                </div>
                <span>Buenos Aires</span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Buenos Aires</h3>
            <p class="text-gray-600 mb-4">La vibrante capital de Argentina, conocida por su arquitectura europea, tango y excelente gastronomía.</p>
            <button class="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver más detalles <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        
        <!-- Destino 4 -->
        <div class="destination-card group" data-aos="fade-up" data-aos-delay="500" data-destination-id="3">
          <div class="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551522355-5df7a5523550?q=80&w=1470&auto=format&fit=crop" 
              alt="Mendoza" 
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                  <i class="fas fa-star text-yellow-400"></i>
                  <span>4.8</span>
                </div>
                <span>Mendoza</span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Mendoza</h3>
            <p class="text-gray-600 mb-4">Región vinícola por excelencia, con impresionantes paisajes montañosos y el Aconcagua.</p>
            <button class="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver más detalles <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        
        <!-- Destino 5 -->
        <div class="destination-card group" data-aos="fade-up" data-aos-delay="600" data-destination-id="4">
          <div class="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1629652487043-7e05c5c7c1db?q=80&w=1470&auto=format&fit=crop" 
              alt="Bariloche" 
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                  <i class="fas fa-star text-yellow-400"></i>
                  <span>4.9</span>
                </div>
                <span>Río Negro</span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Bariloche</h3>
            <p class="text-gray-600 mb-4">Destino de montaña con lagos cristalinos, bosques y excelentes pistas de esquí.</p>
            <button class="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver más detalles <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        
        <!-- Destino 6 -->
        <div class="destination-card group" data-aos="fade-up" data-aos-delay="700" data-destination-id="5">
          <div class="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1604867896102-9f1a35f8f8f1?q=80&w=1470&auto=format&fit=crop" 
              alt="Salta" 
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                  <i class="fas fa-star text-yellow-400"></i>
                  <span>4.7</span>
                </div>
                <span>Salta</span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Salta</h3>
            <p class="text-gray-600 mb-4">Provincia del norte con impresionantes paisajes desérticos, montañas coloridas y rica cultura indígena.</p>
            <button class="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver más detalles <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de Experiencias -->
  <section id="experiences" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="section-title" data-aos="fade-up">Experiencias Únicas</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Vive momentos inolvidables en Argentina con estas experiencias que no te puedes perder.
      </p>
      
      <div class="swiper experience-slider mt-12" data-aos="fade-up" data-aos-delay="200">
        <div class="swiper-wrapper">
          <!-- Experiencia 1 -->
          <div class="swiper-slide">
            <div class="experience-card h-full">
              <div class="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <i class="fas fa-people-group text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Clases de Tango en Buenos Aires</h3>
              <p class="text-gray-600">Aprende los pasos básicos del tango con instructores profesionales en la cuna de este apasionado baile.</p>
            </div>
          </div>
          
          <!-- Experiencia 2 -->
          <div class="swiper-slide">
            <div class="experience-card h-full">
              <div class="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <i class="fas fa-wine-glass-alt text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Degustación de Vinos en Mendoza</h3>
              <p class="text-gray-600">Recorre las mejores bodegas de Mendoza y prueba los famosos vinos Malbec en su lugar de origen.</p>
            </div>
          </div>
          
          <!-- Experiencia 3 -->
          <div class="swiper-slide">
            <div class="experience-card h-full">
              <div class="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <i class="fas fa-ship text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Navegación por el Glaciar Perito Moreno</h3>
              <p class="text-gray-600">Acércate al imponente glaciar en barco y observa de cerca los desprendimientos de hielo.</p>
            </div>
          </div>
          
          <!-- Experiencia 4 -->
          <div class="swiper-slide">
            <div class="experience-card h-full">
              <div class="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <i class="fas fa-horse text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Cabalgata en la Patagonia</h3>
              <p class="text-gray-600">Explora los vastos paisajes patagónicos a caballo, como los antiguos gauchos argentinos.</p>
            </div>
          </div>
          
          <!-- Experiencia 5 -->
          <div class="swiper-slide">
            <div class="experience-card h-full">
              <div class="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <i class="fas fa-utensils text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Asado Argentino Tradicional</h3>
              <p class="text-gray-600">Participa en un auténtico asado argentino y aprende los secretos de esta tradición culinaria.</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination mt-8"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </section>

  <!-- Sección de Estilos de Viaje -->
  <section id="styles" class="py-20">
    <div class="container mx-auto px-6">
      <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-center mb-12">Elige tu Estilo de Viaje</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <!-- Estilo 1 -->
          <div class="style-card">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop" 
              alt="Aventura" 
              class="w-full h-36 object-cover"
            >
            <div class="p-4 text-center">
              <h3 class="font-bold mb-1">Aventura</h3>
              <p class="text-sm text-gray-600">Trekking, rafting y deportes extremos</p>
            </div>
          </div>
          
          <!-- Estilo 2 -->
          <div class="style-card active">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop" 
              alt="Naturaleza" 
              class="w-full h-36 object-cover"
            >
            <div class="p-4 text-center">
              <h3 class="font-bold mb-1">Naturaleza</h3>
              <p class="text-sm text-gray-600">Parques nacionales y vida silvestre</p>
            </div>
          </div>
          
          <!-- Estilo 3 -->
          <div class="style-card">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop" 
              alt="Cultural" 
              class="w-full h-36 object-cover"
            >
            <div class="p-4 text-center">
              <h3 class="font-bold mb-1">Cultural</h3>
              <p class="text-sm text-gray-600">Museos, historia y tradiciones</p>
            </div>
          </div>
          
          <!-- Estilo 4 -->
          <div class="style-card">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop" 
              alt="Gastronomía" 
              class="w-full h-36 object-cover"
            >
            <div class="p-4 text-center">
              <h3 class="font-bold mb-1">Gastronomía</h3>
              <p class="text-sm text-gray-600">Vinos, asados y cocina regional</p>
            </div>
          </div>
          
          <!-- Estilo 5 -->
          <div class="style-card">
            <img 
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop" 
              alt="Relax" 
              class="w-full h-36 object-cover"
            >
            <div class="p-4 text-center">
              <h3 class="font-bold mb-1">Relax</h3>
              <p class="text-sm text-gray-600">Spas, termas y descanso</p>
            </div>
          </div>
        </div>
        
        <p class="text-center text-gray-600 max-w-2xl mx-auto mt-10">
          Genera ideas visuales en 30 segundos para explorar y crear tus ideas en un lugar increíble.
        </p>
        
        <div class="flex justify-center mt-8">
          <a href="https://wa.me/2665047934?text=Quiero%20generar%20un%20itinerario%20personalizado" target="_blank" class="btn btn-primary btn-with-icon">
            <i class="fab fa-whatsapp"></i>
            <span>Generar Itinerario</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de Contacto -->
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="bg-cta-pattern rounded-3xl text-white p-8 md:p-16 text-center" data-aos="fade-up">
        <h2 class="text-4xl font-bold mb-4">¿Listo para vivir la experiencia Argentina?</h2>
        <p class="text-xl mb-10 max-w-3xl mx-auto">
          Contacta con nuestros expertos en viajes para planificar tu aventura perfecta en Argentina. Itinerarios personalizados, consejos locales y asistencia 24/7.
        </p>
        
        <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl text-left">
            <h3 class="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form id="contact-form" class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div class="form-group">
                  <input type="text" id="name" placeholder="Tu nombre" class="form-control bg-white/10 border-white/20 text-white placeholder-white/60">
                </div>
                <div class="form-group">
                  <input type="email" id="email" placeholder="Tu email" class="form-control bg-white/10 border-white/20 text-white placeholder-white/60">
                </div>
              </div>
              <div class="form-group">
                <input type="text" id="subject" placeholder="Asunto" class="form-control bg-white/10 border-white/20 text-white placeholder-white/60">
              </div>
              <div class="form-group">
                <textarea id="message" rows="4" placeholder="Tu mensaje" class="form-control bg-white/10 border-white/20 text-white placeholder-white/60"></textarea>
              </div>
              <button type="submit" class="btn btn-white w-full">Enviar mensaje</button>
            </form>
          </div>
          
          <div class="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl text-left">
            <h3 class="text-2xl font-bold mb-6">Contáctanos directamente</h3>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-white/20 p-3 rounded-full">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Dirección</h4>
                  <p class="text-white/80">Av. Corrientes 1234, Buenos Aires, Argentina</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="bg-white/20 p-3 rounded-full">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Email</h4>
                  <p class="text-white/80">info@descubreargentina.com</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="bg-white/20 p-3 rounded-full">
                  <i class="fas fa-phone"></i>
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Teléfono</h4>
                  <p class="text-white/80">+54 11 1234 5678</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="bg-white/20 p-3 rounded-full">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 class="font-semibold mb-1">WhatsApp</h4>
                  <p class="text-white/80">+54 266 504 7934</p>
                </div>
              </div>
              
              <a href="https://wa.me/2665047934" target="_blank" class="btn btn-white w-full btn-with-icon">
                <i class="fab fa-whatsapp"></i>
                <span>Chatear ahora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-dark text-white py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="h-10 w-10 rounded-lg bg-gradient-to-r from-primary to-[#FF8E8E] flex items-center justify-center text-white font-bold">AR</div>
            <span class="text-xl font-bold">Descubre Argentina</span>
          </div>
          <p class="text-gray-400 mb-6">Tu guía definitiva para explorar las maravillas de Argentina, desde las cataratas del Iguazú hasta la Patagonia.</p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-primary">Enlaces rápidos</h3>
          <ul class="space-y-3">
            <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#destinations" class="text-gray-400 hover:text-white transition-colors">Destinos</a></li>
            <li><a href="#experiences" class="text-gray-400 hover:text-white transition-colors">Experiencias</a></li>
            <li><a href="#styles" class="text-gray-400 hover:text-white transition-colors">Estilos de Viaje</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-primary">Destinos populares</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Buenos Aires</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Bariloche</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mendoza</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cataratas del Iguazú</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Glaciar Perito Moreno</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-primary">Newsletter</h3>
          <p class="text-gray-400 mb-4">Suscríbete para recibir las últimas novedades y ofertas especiales.</p>
          <form class="flex mb-6">
            <input type="email" placeholder="Tu email" class="form-control rounded-l-lg rounded-r-none border-r-0 bg-gray-700 border-gray-600 text-white">
            <button type="submit" class="btn bg-primary rounded-l-none px-4">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
          <p class="text-gray-400 text-sm">Al suscribirte, aceptas nuestra política de privacidad.</p>
        </div>
      </div>
      
      <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Descubre Argentina. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

  <!-- Modal de destinos -->
  <div class="modal" id="destination-modal">
    <div class="modal-content">
      <button class="modal-close absolute top-4 right-4 text-white bg-gray-800/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm">
        <i class="fas fa-times"></i>
      </button>
      <img src="" alt="" class="w-full h-64 object-cover" id="modal-image">
      <div class="p-8">
        <h2 class="text-2xl font-bold mb-4" id="modal-title"></h2>
        <p class="text-gray-600 mb-6" id="modal-description"></p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <span class="text-sm text-gray-500">Ubicación</span>
              <p class="font-medium" id="modal-location"></p>
            </div>
          </div>
          
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <div>
              <span class="text-sm text-gray-500">Mejor época para visitar</span>
              <p class="font-medium" id="modal-season"></p>
            </div>
          </div>
        </div>
        
        <div class="flex justify-end">
          <a href="https://wa.me/2665047934?text=Estoy%20interesado%20en%20el%20destino%20" id="modal-whatsapp-link" target="_blank" class="btn btn-primary btn-with-icon">
            <i class="fab fa-whatsapp"></i>
            <span>Solicitar más información</span>
          </a>
        </div>
      </div>
    </div>
  </div>
`;

// Datos de destinos para el modal
const destinationDetails = [
  {
    title: 'Cataratas del Iguazú',
    description: 'Las Cataratas del Iguazú son un conjunto de 275 saltos de agua ubicados en el río Iguazú, en la frontera entre Argentina y Brasil. Declaradas Patrimonio de la Humanidad por la UNESCO y una de las Siete Maravillas Naturales del Mundo, ofrecen un espectáculo natural incomparable. El Parque Nacional Iguazú permite recorrer pasarelas que te acercan a las cascadas, siendo la Garganta del Diablo el punto más impresionante con sus 80 metros de altura.',
    location: 'Misiones, Argentina',
    season: 'Marzo a Mayo y Agosto a Octubre',
    image: 'https://images.unsplash.com/photo-1610993302487-6dbfc5eb0ece?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Glaciar Perito Moreno',
    description: 'El Glaciar Perito Moreno es uno de los pocos glaciares en el mundo que sigue creciendo. Con 250 km² de superficie y 30 km de longitud, este impresionante río de hielo se encuentra en el Parque Nacional Los Glaciares en la provincia de Santa Cruz. Lo que hace único a este glaciar es el espectáculo de sus desprendimientos periódicos, cuando enormes bloques de hielo se desprenden y caen al agua con un estruendo impresionante.',
    location: 'Santa Cruz, Patagonia',
    season: 'Diciembre a Marzo',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Buenos Aires',
    description: 'Buenos Aires, la capital de Argentina, es una metrópolis vibrante conocida como la "París de Sudamérica" por su arquitectura de estilo europeo. La ciudad ofrece una rica vida cultural con teatros, museos, galerías de arte y es la cuna del tango. Sus barrios distintivos como La Boca, San Telmo, Recoleta y Palermo tienen cada uno su propio carácter y atractivos. La gastronomía porteña es otro punto fuerte, con sus famosas parrillas y cafés históricos.',
    location: 'Buenos Aires, Argentina',
    season: 'Todo el año, ideal en primavera y otoño',
    image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Mendoza',
    description: 'Mendoza es el corazón de la región vinícola argentina, famosa mundialmente por sus vinos Malbec. Situada al pie de la Cordillera de los Andes, ofrece paisajes espectaculares y es la puerta de entrada al Aconcagua, la montaña más alta de América. Además de las bodegas y viñedos, Mendoza ofrece actividades como rafting, senderismo, esquí en invierno y termas naturales. Su clima soleado durante casi todo el año la hace un destino perfecto para los amantes del enoturismo y las actividades al aire libre.',
    location: 'Mendoza, Argentina',
    season: 'Septiembre a Abril (vendimia en Marzo)',
    image: 'https://images.unsplash.com/photo-1551522355-5df7a5523550?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Bariloche',
    description: 'San Carlos de Bariloche, conocida como la "Suiza argentina", es una ciudad ubicada en la provincia de Río Negro, en la región de la Patagonia. Rodeada por lagos cristalinos y montañas nevadas, Bariloche es famosa por sus paisajes alpinos, chocolaterías artesanales y centros de esquí como el Cerro Catedral. Durante todo el año ofrece actividades como senderismo, kayak, mountain bike y pesca. Su arquitectura de estilo alpino y su famosa Ruta de los Siete Lagos la convierten en uno de los destinos más pintorescos de Argentina.',
    location: 'Río Negro, Patagonia',
    season: 'Diciembre a Marzo (verano) y Junio a Septiembre (esquí)',
    image: 'https://images.unsplash.com/photo-1629652487043-7e05c5c7c1db?q=80&w=1470&auto=format&fit=crop'
  },
  {
    title: 'Salta',
    description: 'Salta, conocida como "La Linda", es una provincia del noroeste argentino con una rica herencia colonial y paisajes naturales impresionantes. Su capital, también llamada Salta, conserva una arquitectura colonial bien preservada. La región es famosa por la Quebrada de Humahuaca, el Tren a las Nubes que atraviesa puentes y túneles a gran altura, y los coloridos cerros de la Quebrada de Cafayate. La cultura local, influenciada por tradiciones indígenas, se refleja en su música folclórica, artesanías y gastronomía regional.',
    location: 'Salta, Noroeste Argentino',
    season: 'Abril a Noviembre',
    image: 'https://images.unsplash.com/photo-1604867896102-9f1a35f8f8f1?q=80&w=1470&auto=format&fit=crop'
  }
];

// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar Typed.js para animación del título
  new Typed('#hero-title', {
    strings: ['Descubre la magia de Argentina', 'Explora paisajes increíbles', 'Vive experiencias únicas'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    showCursor: false
  });

  // Inicializar Swiper para el slider de experiencias
  const experienceSwiper = new Swiper('.experience-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  // Animaciones GSAP
  initGSAPAnimations();

  // Funcionalidad del menú móvil
  initMobileMenu();

  // Funcionalidad de los modales de destinos
  initDestinationModals();

  // Funcionalidad de las tarjetas de estilo
  initStyleCards();

  // Funcionalidad de navegación activa
  initActiveNavigation();

  // Inicializar formulario de contacto
  initContactForm();
});

// Animaciones GSAP
function initGSAPAnimations() {
  // Hero section animations
  gsap.to('.decoration-1', {
    x: 20,
    y: -20,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  gsap.to('.decoration-2', {
    x: -20,
    y: 20,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  // Scroll animations para elementos que no usan AOS
  ScrollTrigger.batch('.fade-up', {
    onEnter: batch => gsap.to(batch, {y: 0, opacity: 1, stagger: 0.1, duration: 0.8}),
    start: 'top 85%',
    once: true
  });
}

// Funcionalidad del menú móvil
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
  });

  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });
  });
}

// Funcionalidad de los modales de destinos
function initDestinationModals() {
  const destinationCards = document.querySelectorAll('[data-destination-id]');
  const modal = document.getElementById('destination-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalLocation = document.getElementById('modal-location');
  const modalSeason = document.getElementById('modal-season');
  const modalWhatsappLink = document.getElementById('modal-whatsapp-link');

  destinationCards.forEach(card => {
    card.addEventListener('click', () => {
      const destinationId = parseInt(card.dataset.destinationId);
      const details = destinationDetails[destinationId];
      
      modalImage.src = details.image;
      modalImage.alt = details.title;
      modalTitle.textContent = details.title;
      modalDescription.textContent = details.description;
      modalLocation.textContent = details.location;
      modalSeason.textContent = details.season;
      modalWhatsappLink.href = `https://wa.me/2665047934?text=Estoy%20interesado%20en%20visitar%20${encodeURIComponent(details.title)}`;
      
      modal.classList.add('active');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// Funcionalidad de las tarjetas de estilo
function initStyleCards() {
  const styleCards = document.querySelectorAll('.style-card');
  
  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      styleCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

// Funcionalidad de navegación activa
function initActiveNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
    
    mobileNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// Inicializar formulario de contacto
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Obtener valores del formulario
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Validación básica
      if (!name || !email || !message) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
      }
      
      // Aquí iría la lógica para enviar el formulario al servidor
      // Como ejemplo, redirigimos a WhatsApp
      const whatsappText = `Hola, soy ${name}. ${message}`;
      window.open(`https://wa.me/2665047934?text=${encodeURIComponent(whatsappText)}`, '_blank');
      
      // Resetear formulario
      contactForm.reset();
      
      // Mensaje de éxito
      alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
    });
  }
}