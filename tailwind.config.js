/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#faf8f3',
        navy: '#1a2332',
        gold: '#d4af37',
        emerald: '#2d5f4f',
        'dark-bg': '#0f1419',
        'dark-surface': '#1a2332',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'zoom-in': 'zoomIn 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
