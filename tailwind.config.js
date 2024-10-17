/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        animate: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1', borderRadius: '0' },
          '100%': { transform: 'translateY(-1000px) rotate(720deg)', opacity: '0', borderRadius: '50%' },
        },
        colorChange: {
          '0%, 100%': { color: 'white' },  
          '14%': { backgroundColor: 'rgba(255, 105, 180, 0.4)' },  // Hot pink
          '28%': { backgroundColor: 'rgba(138, 43, 226, 0.4)' },   // Blue violet
          '42%': { backgroundColor: 'rgba(30, 144, 255, 0.4)' },   // Dodger blue
          '56%': { backgroundColor: 'rgba(0, 191, 255, 0.4)' },    // Deep sky blue
          '70%': { backgroundColor: 'rgba(148, 0, 211, 0.4)' },    // Dark violet
          '84%': { backgroundColor: 'rgba(255, 20, 147, 0.4)' },   // Deep pink
          '89%': { backgroundColor: 'rgba(75, 0, 130, 0.4)' }      // Indigo (Dark violet)
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
          '10%': { transform: 'scale(0.9)', opacity: 0 },
          '90%': { transform: 'scale(1)', opacity: 1 },
        },
        'border': {
                    to: { '--border-angle': '360deg' },
                }
      },
      animation: {
        animate: 'animate 25s linear infinite', // Circle animation
        colorChange: 'colorChange 7s infinite',
        'wave-fast': 'wave 10s linear infinite',
        'wave-faster': 'wave 8s linear infinite',
        'scale-up': 'scale-up 0.3s ease-out',
        'gradient-x': 'gradient-x 3s ease infinite',
        'border': 'border 4s linear infinite',
      },
    },
    variants: {
      extend: {
        scale: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
}
