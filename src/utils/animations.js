// src/utils/animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import Typed from 'typed.js';

// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger);

// Inicializar AOS para animaciones de scroll
export const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    delay: 100
  });
};

// Inicializar animaciones de typing para el hero
export const initTypedAnimation = (elementId, strings) => {
  return new Typed(elementId, {
    strings: strings,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: false
  });
};

// Animaciones GSAP
export const initGSAPAnimations = () => {
  // Animaciones flotantes para decoraciones
  gsap.to('.floating-element', {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.2
  });

  // Parallax para imágenes
  gsap.utils.toArray('.parallax-image').forEach(image => {
    gsap.to(image, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: image.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Efecto de entrada para tarjetas
  ScrollTrigger.batch('.card-reveal', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    }),
    start: 'top 85%',
    once: true
  });

  // Animación para contador de estadísticas
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 80;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 90%',
      onEnter: updateCount,
      once: true
    });
  });

  // Animación de desplazamiento para secciones
  gsap.utils.toArray('.section-fade-in').forEach(section => {
    gsap.fromTo(section, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true
        }
      }
    );
  });
};

// Inicializar animación de desplazamiento suave para navegación
export const initSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Cerrar menú móvil si está abierto
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
          mobileMenu.classList.add('translate-x-full');
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Ajuste para header
          behavior: 'smooth'
        });
      }
    });
  });
};