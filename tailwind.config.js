/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        standard: "'Glacial Indifference', sans-serif",
        title: "Donau Neue",
        destinations: "Black Bones Personal Use",
      },
      colors: {
        'standard': '#FEFAF9',  
        'blue': '#05748B',
        'orange': '#F4A361',
      }
    },

  },


}


