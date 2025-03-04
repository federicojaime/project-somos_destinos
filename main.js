import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper/bundle';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize the app
document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class="logo">
      <div class="logo-icon">AR</div>
      <span>Descubre Argentina</span>
    </div>
    <nav class="nav">
      <a href="#home" class="nav-item active">Inicio</a>
      <a href="#destinations" class="nav-item">Destinos</a>
      <a href="#experiences" class="nav-item">Experiencias</a>
      <a href="#styles" class="nav-item">Estilos de Viaje</a>
      <a href="#contact" class="nav-item">Contacto</a>
    </nav>
    <button class="mobile-menu-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  </header>

  <div class="mobile-menu">
    <button class="mobile-menu-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <nav class="mobile-nav">
      <a href="#home" class="mobile-nav-item active">Inicio</a>
      <a href="#destinations" class="mobile-nav-item">Destinos</a>
      <a href="#experiences" class="mobile-nav-item">Experiencias</a>
      <a href="#styles" class="mobile-nav-item">Estilos de Viaje</a>
      <a href="#contact" class="mobile-nav-item">Contacto</a>
    </nav>
  </div>

  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content fade-right">
        <h1 class="hero-title">Descubre la magia de Argentina</h1>
        <p class="hero-subtitle">Explora paisajes impresionantes, cultura vibrante y experiencias inolvidables en uno de los países más diversos de Sudamérica.</p>
        <div>
          <a href="#destinations" class="btn">Explorar destinos</a>
          <a href="#contact" class="btn btn-outline">Contactar</a>
        </div>
      </div>
    </div>
    <div class="decoration decoration-1"></div>
    <div class="decoration decoration-2"></div>
  </section>

  <section id="destinations" class="section">
    <div class="container">
      <h2 class="section-title fade-up">Destinos Populares</h2>
      <p class="section-subtitle fade-up">Descubre los lugares más impresionantes de Argentina, desde las cataratas del Iguazú hasta los glaciares de la Patagonia.</p>
      
      <div class="destinations">
        <div class="destination-card fade-up">
          <img src="https://images.unsplash.com/photo-1610993302487-6dbfc5eb0ece?q=80&w=1470&auto=format&fit=crop" alt="Cataratas del Iguazú" class="destination-img">
          <div class="destination-content">
            <h3 class="destination-title">Cataratas del Iguazú</h3>
            <p class="destination-description">Una de las maravillas naturales más impresionantes del mundo, con más de 275 saltos de agua.</p>
            <div class="destination-meta">
              <div class="destination-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span>4.9</span>
              </div>
              <span>Misiones</span>
            </div>
          </div>
        </div>

        <div class="destination-card fade-up">
          <img src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1470&auto=format&fit=crop" alt="Glaciar Perito Moreno" class="destination-img">
          <div class="destination-content">
            <h3 class="destination-title">Glaciar Perito Moreno</h3>
            <p class="destination-description">Un impresionante glaciar de 250 km² y 30 km de longitud, uno de los pocos glaciares en crecimiento.</p>
            <div class="destination-meta">
              <div class="destination-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span>4.8</span>
              </div>
              <span>Santa Cruz</span>
            </div>
          </div>
        </div>

        <div class="destination-card fade-up">
          <img src="https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=1470&auto=format&fit=crop" alt="Buenos Aires" class="destination-img">
          <div class="destination-content">
            <h3 class="destination-title">Buenos Aires</h3>
            <p class="destination-description">La vibrante capital de Argentina, conocida por su arquitectura europea, tango y excelente gastronomía.</p>
            <div class="destination-meta">
              <div class="destination-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span>4.7</span>
              </div>
              <span>Buenos Aires</span>
            </div>
          </div>
        </div>

        <div class="destination-card fade-up">
          <img src="https://images.unsplash.com/photo-1551522355-5df7a5523550?q=80&w=1470&auto=format&fit=crop" alt="Mendoza" class="destination-img">
          <div class="destination-content">
            <h3 class="destination-title">Mendoza</h3>
            <p class="destination-description">Región vinícola por excelencia, con impresionantes paisajes montañosos y el Aconcagua, la montaña más alta de América.</p>
            <div class="destination-meta">
              <div class="destination-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span>4.8</span>
              </div>
              <span>Mendoza</span>
            </div>
          </div>
        </div>

        <div class="destination-card fade-up">
          <img src="https://images.unsplash.com/photo-1629652487043-7e05c5c7c1db?q=80&w=1470&auto=format&fit=crop" alt="Bariloche" class="destination-img">
          <div class="destination-content">
            <h3 class="destination-title">Bariloche</h3>
            <p class="destination-description">Destino de montaña con lagos cristalinos, bosques y excelentes pistas de esquí, conocido como la "Suiza argentina".</p>
            <div class="destination-meta">
              <div class="destination-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span>4.9</span>
              </div>
              <span>Río Negro</span>
            </div>
          </div>
        </div>

        <div class="destination-card fade-up">
          <img src="https://images.unsplash.com/photo-1604867896102-9f1a35f8f8f1?q=80&w=1470&auto=format&fit=crop" alt="Salta" class="destination-img">
          <div class="destination-content">
            <h3 class="destination-title">Salta</h3>
            <p class="destination-description">Provincia del norte con impresionantes paisajes desérticos, montañas coloridas y rica cultura indígena.</p>
            <div class="destination-meta">
              <div class="destination-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span>4.7</span>
              </div>
              <span>Salta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="experiences" class="section experiences">
    <div class="container">
      <h2 class="section-title fade-up">Experiencias Únicas</h2>
      <p class="section-subtitle fade-up">Vive momentos inolvidables en Argentina con estas experiencias que no te puedes perder.</p>
      
      <div class="swiper experience-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="experience-slide">
              <div class="experience-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 class="experience-title">Clases de Tango en Buenos Aires</h3>
              <p class="experience-description">Aprende los pasos básicos del tango con instructores profesionales en la cuna de este apasionado baile.</p>
            </div>
          </div>
          
          <div class="swiper-slide">
            <div class="experience-slide">
              <div class="experience-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 class="experience-title">Degustación de Vinos en Mendoza</h3>
              <p class="experience-description">Recorre las mejores bodegas de Mendoza y prueba los famosos vinos Malbec en su lugar de origen.</p>
            </div>
          </div>
          
          <div class="swiper-slide">
            <div class="experience-slide">
              <div class="experience-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3 class="experience-title">Navegación por el Glaciar Perito Moreno</h3>
              <p class="experience-description">Acércate al imponente glaciar en barco y observa de cerca los desprendimientos de hielo.</p>
            </div>
          </div>
          
          <div class="swiper-slide">
            <div class="experience-slide">
              <div class="experience-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <h3 class="experience-title">Cabalgata en la Patagonia</h3>
              <p class="experience-description">Explora los vastos paisajes patagónicos a caballo, como los antiguos gauchos argentinos.</p>
            </div>
          </div>
          
          <div class="swiper-slide">
            <div class="experience-slide">
              <div class="experience-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 class="experience-title">Asado Argentino Tradicional</h3>
              <p class="experience-description">Participa en un auténtico asado argentino y aprende los secretos de esta tradición culinaria.</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </section>

  <section id="styles" class="section">
    <div class="styles-section fade-up">
      <h2 class="styles-title">Elige tu Estilo de Viaje</h2>
      
      <div class="styles-grid">
        <div class="style-card">
          <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop" alt="Aventura" class="style-img">
          <div class="style-content">
            <h3 class="style-name">Aventura</h3>
            <p class="style-description">Trekking, rafting y deportes extremos</p>
          </div>
        </div>
        
        <div class="style-card active">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop" alt="Naturaleza" class="style-img">
          <div class="style-content">
            <h3 class="style-name">Naturaleza</h3>
            <p class="style-description">Parques nacionales y vida silvestre</p>
          </div>
        </div>
        
        <div class="style-card">
          <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop" alt="Cultural" class="style-img">
          <div class="style-content">
            <h3 class="style-name">Cultural</h3>
            <p class="style-description">Museos, historia y tradiciones</p>
          </div>
        </div>
        
        <div class="style-card">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop" alt="Gastronomía" class="style-img">
          <div class="style-content">
            <h3 class="style-name">Gastronomía</h3>
            <p class="style-description">Vinos, asados y cocina regional</p>
          </div>
        </div>
        
        <div class="style-card">
          <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop" alt="Relax" class="style-img">
          <div class="style-content">
            <h3 class="style-name">Relax</h3>
            <p class="style-description">Spas, termas y descanso</p>
          </div>
        </div>
      </div>
      
      <p class="section-subtitle" style="margin-top: 2rem;">
        Genera ideas visuales en 30 segundos para explorar y crear tus ideas en un lugar increíble.
      </p>
      
      <div style="text-align: center; margin-top: 2rem;">
        <a href="#contact" class="btn">Generar Itinerario</a>
      </div>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="cta-section fade-up">
      <h2 class="cta-title">¿Listo para vivir la experiencia Argentina?</h2>
      <p class="cta-description">Contacta con nuestros expertos en viajes para planificar tu aventura perfecta en Argentina. Itinerarios personalizados, consejos locales y asistencia 24/7.</p>
      <div class="cta-buttons">
        <a href="#" class="btn btn-white">Contactar ahora</a>
        <a href="#destinations" class="btn btn-outline">Ver más destinos</a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>Descubre Argentina</h3>
          <p>Tu guía definitiva para explorar las maravillas de Argentina, desde las cataratas del Iguazú hasta la Patagonia.</p>
          <div class="social-links">
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>Enlaces rápidos</h3>
          <ul class="footer-links">
            <li><a href="#home">Inicio</a></li <li><a href="#destinations">Destinos</a></li>
            <li><a href="#experiences">Experiencias</a></li>
            <li><a href="#styles">Estilos de Viaje</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>Destinos populares</h3>
          <ul class="footer-links">
            <li><a href="#">Buenos Aires</a></li>
            <li><a href="#">Bariloche</a></li>
            <li><a href="#">Mendoza</a></li>
            <li><a href="#">Cataratas del Iguazú</a></li>
            <li><a href="#">Glaciar Perito Moreno</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>Contacto</h3>
          <ul class="footer-links">
            <li>Email: info@descubreargentina.com</li>
            <li>Teléfono: +54 11 1234 5678</li>
            <li>Dirección: Av. Corrientes 1234, Buenos Aires</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 Descubre Argentina. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

  <div class="modal" id="destination-modal">
    <div class="modal-content">
      <button class="modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <img src="" alt="" class="modal-image" id="modal-image">
      <div class="modal-body">
        <h2 class="modal-title" id="modal-title"></h2>
        <p class="modal-description" id="modal-description"></p>
        <div class="modal-info">
          <div class="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span id="modal-location"></span>
          </div>
          <div class="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Mejor época: <span id="modal-season"></span></span>
          </div>
        </div>
        <div class="modal-actions">
          <a href="#" class="btn" id="modal-link">Ver más detalles</a>
        </div>
      </div>
    </div>
  </div>
`;

// Initialize animations
function initAnimations() {
  // Hero section animations
  gsap.to('.fade-right', {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
  });

  // Scroll animations
  gsap.utils.toArray('.fade-up').forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });

  // Decorative elements animation
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
}

// Initialize Swiper
function initSwiper() {
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
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });

  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// Destination cards modal functionality
function initDestinationModals() {
  const destinationCards = document.querySelectorAll('.destination-card');
  const modal = document.getElementById('destination-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalLocation = document.getElementById('modal-location');
  const modalSeason = document.getElementById('modal-season');
  const modalLink = document.getElementById('modal-link');

  const destinationDetails = [
    {
      title: 'Cataratas del Iguazú',
      description: 'Las Cataratas del Iguazú son un conjunto de 275 saltos de agua ubicados en el río Iguazú, en la frontera entre Argentina y Brasil. Declaradas Patrimonio de la Humanidad por la UNESCO y una de las Siete Maravillas Naturales del Mundo, ofrecen un espectáculo natural incomparable. El Parque Nacional Iguazú permite recorrer pasarelas que te acercan a las cascadas, siendo la Garganta del Diablo el punto más impresionante con sus 80 metros de altura.',
      location: 'Misiones, Argentina',
      season: 'Marzo a Mayo y Agosto a Octubre',
      image: 'https://images.unsplash.com/photo-1610993302487-6dbfc5eb0ece?q=80&w=1470&auto=format&fit=crop',
      link: '#'
    },
    {
      title: 'Glaciar Perito Moreno',
      description: 'El Glaciar Perito Moreno es uno de los pocos glaciares en el mundo que sigue creciendo. Con 250 km² de superficie y 30 km de longitud, este impresionante río de hielo se encuentra en el Parque Nacional Los Glaciares en la provincia de Santa Cruz. Lo que hace único a este glaciar es el espectáculo de sus desprendimientos periódicos, cuando enormes bloques de hielo se desprenden y caen al agua con un estruendo impresionante.',
      location: 'Santa Cruz, Patagonia',
      season: 'Diciembre a Marzo',
      image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1470&auto=format&fit=crop',
      link: '#'
    },
    {
      title: 'Buenos Aires',
      description: 'Buenos Aires, la capital de Argentina, es una metrópolis vibrante conocida como la "París de Sudamérica" por su arquitectura de estilo europeo. La ciudad ofrece una rica vida cultural con teatros, museos, galerías de arte y es la cuna del tango. Sus barrios distintivos como La Boca, San Telmo, Recoleta y Palermo tienen cada uno su propio carácter y atractivos. La gastronomía porteña es otro punto fuerte, con sus famosas parrillas y cafés históricos.',
      location: 'Buenos Aires, Argentina',
      season: 'Todo el año, ideal en primavera y otoño',
      image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=1470&auto=format&fit=crop',
      link: '#'
    },
    {
      title: 'Mendoza',
      description: 'Mendoza es el corazón de la región vinícola argentina, famosa mundialmente por sus vinos Malbec. Situada al pie de la Cordillera de los Andes, ofrece paisajes espectaculares y es la puerta de entrada al Aconcagua, la montaña más alta de América. Además de las bodegas y viñedos, Mendoza ofrece actividades como rafting, senderismo, esquí en invierno y termas naturales. Su clima soleado durante casi todo el año la hace un destino perfecto para los amantes del enoturismo y las actividades al aire libre.',
      location: 'Mendoza, Argentina',
      season: 'Septiembre a Abril (vendimia en Marzo)',
      image: 'https://images.unsplash.com/photo-1551522355-5df7a5523550?q=80&w=1470&auto=format&fit=crop',
      link: '#'
    },
    {
      title: 'Bariloche',
      description: 'San Carlos de Bariloche, conocida como la "Suiza argentina", es una ciudad ubicada en la provincia de Río Negro, en la región de la Patagonia. Rodeada por lagos cristalinos y montañas nevadas, Bariloche es famosa por sus paisajes alpinos, chocolaterías artesanales y centros de esquí como el Cerro Catedral. Durante todo el año ofrece actividades como senderismo, kayak, mountain bike y pesca. Su arquitectura de estilo alpino y su famosa Ruta de los Siete Lagos la convierten en uno de los destinos más pintorescos de Argentina.',
      location: 'Río Negro, Patagonia',
      season: 'Diciembre a Marzo (verano) y Junio a Septiembre (esquí)',
      image: 'https://images.unsplash.com/photo-1629652487043-7e05c5c7c1db?q=80&w=1470&auto=format&fit=crop',
      link: '#'
    },
    {
      title: 'Salta',
      description: 'Salta, conocida como "La Linda", es una provincia del noroeste argentino con una rica herencia colonial y paisajes naturales impresionantes. Su capital, también llamada Salta, conserva una arquitectura colonial bien preservada. La región es famosa por la Quebrada de Humahuaca, el Tren a las Nubes que atraviesa puentes y túneles a gran altura, y los coloridos cerros de la Quebrada de Cafayate. La cultura local, influenciada por tradiciones indígenas, se refleja en su música folclórica, artesanías y gastronomía regional.',
      location: 'Salta, Noroeste Argentino',
      season: 'Abril a Noviembre',
      image: 'https://images.unsplash.com/photo-1604867896102-9f1a35f8f8f1?q=80&w=1470&auto=format&fit=crop',
      link: '#'
    }
  ];

  destinationCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const details = destinationDetails[index];
      modalImage.src = details.image;
      modalImage.alt = details.title;
      modalTitle.textContent = details.title;
      modalDescription.textContent = details.description;
      modalLocation.textContent = details.location;
      modalSeason.textContent = details.season;
      modalLink.href = details.link;
      
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

// Style cards functionality
function initStyleCards() {
  const styleCards = document.querySelectorAll('.style-card');
  
  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active class from all cards
      styleCards.forEach(c => c.classList.remove('active'));
      // Add active class to clicked card
      card.classList.add('active');
    });
  });
}

// Navigation active state
function initNavigation() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').substring(1) === current) {
        item.classList.add('active');
      }
    });
    
    mobileNavItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').substring(1) === current) {
        item.classList.add('active');
      }
    });
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initSwiper();
  initMobileMenu();
  initDestinationModals();
  initStyleCards();
  initNavigation();
});