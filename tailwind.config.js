/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FF4B4B",
          secondary: "#4ECDC4",
          accent: "#FFD166",
          dark: "#2D3436",
          light: "#F9F9F9",
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        backgroundImage: {
          'hero-pattern': "url('https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1470&auto=format&fit=crop')",
          'cta-pattern': "linear-gradient(135deg, #FF4B4B, #FF8E8E)",
        },
      },
    },
    plugins: [],
  }