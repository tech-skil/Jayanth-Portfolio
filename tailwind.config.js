/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
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
        
      },
      animation: {
        colorChange: 'colorChange 7s infinite', 
      },
    },
    
  },
  plugins: [],
}

