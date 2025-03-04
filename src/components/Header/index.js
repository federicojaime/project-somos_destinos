// src/components/Header/index.js
const Header = () => {
    return `
      <!-- Header con navegación -->
      <header class="fixed top-0 w-full z-50 transition-all duration-300" id="main-header">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">AR</div>
            <span class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Descubre Argentina</span>
          </div>
  
          <nav class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link active">Inicio</a>
            <a href="#destinations" class="nav-link">Destinos</a>
            <a href="#about" class="nav-link">Nosotros</a>
            <a href="#experiences" class="nav-link">Experiencias</a>
            <a href="#styles" class="nav-link">Estilos</a>
            <a href="#contact" class="nav-link">Contacto</a>
          </nav>
  
          <div class="flex items-center gap-4">
            <div class="hidden md:flex">
              <a href="#contact" class="btn btn-sm btn-primary pulse-animation">
                Reservar Ahora
              </a>
            </div>
            <button class="md:hidden text-dark focus:outline-none" id="mobile-menu-btn">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>
  
      <!-- Menú móvil -->
      <div class="fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-500 ease-in-out" id="mobile-menu">
        <div class="container mx-auto px-6 py-8 h-full flex flex-col">
          <div class="flex justify-end mb-8">
            <button id="mobile-menu-close" class="text-dark focus:outline-none">
              <i class="fas fa-times text-2xl"></i>
            </button>
          </div>
          
          <div class="flex items-center justify-center mb-10">
            <div class="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl shadow-lg">AR</div>
          </div>
          
          <nav class="flex flex-col space-y-6 items-center text-xl font-semibold">
            <a href="#home" class="mobile-nav-link active">Inicio</a>
            <a href="#destinations" class="mobile-nav-link">Destinos</a>
            <a href="#about" class="mobile-nav-link">Nosotros</a>
            <a href="#experiences" class="mobile-nav-link">Experiencias</a>
            <a href="#styles" class="mobile-nav-link">Estilos</a>
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
  
      <script>
        // Cambiar estilo del header al hacer scroll
        window.addEventListener('scroll', () => {
          const header = document.getElementById('main-header');
          if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md');
          } else {
            header.classList.remove('bg-white', 'shadow-md');
          }
        });
      </script>
    `;
};

export default Header;