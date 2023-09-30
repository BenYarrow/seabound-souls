/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    'bg-white', 
    'text-blue', 
    'font standard',
    'text-lg',
    'text-xl'
  ],  
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        standard: "'Poppins', sans-serif",
        title: "Donau Neue",
        destinations: "Black Bones Personal Use",
      },
      colors: {
        'white': '#FEFAF9',  
        'blue': '#26567B',
        'orange': '#F4A361',
      }
    },

  },


}


