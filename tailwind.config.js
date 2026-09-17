/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glam: {
          yellow: '#F59E0B',
          gold: '#EAB308',
          pink: '#EC4899',
          magenta: '#BE185D',
          rose: '#E11D48',
          darkPink: '#9F1239',
          charcoal: '#1A1615',
          body: '#2C221E',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cinzel Decorative', 'Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'magenta-glow': '0 10px 30px -5px rgba(190, 24, 93, 0.3), 0 0 20px 0 rgba(245, 158, 11, 0.25)',
        'yellow-glow': '0 10px 25px -5px rgba(245, 158, 11, 0.35)',
        'glam-card': '0 15px 35px -10px rgba(190, 24, 93, 0.12), 0 0 15px 0 rgba(245, 158, 11, 0.15)',
      },
      backgroundImage: {
        'glam-gradient': 'linear-gradient(135deg, #F59E0B 0%, #E11D48 50%, #BE185D 100%)',
        'text-glam': 'linear-gradient(90deg, #F59E0B 0%, #E11D48 45%, #BE185D 100%)',
        'yellow-pink': 'linear-gradient(90deg, #EAB308 0%, #EC4899 50%, #BE185D 100%)',
      }
    },
  },
  plugins: [],
}
