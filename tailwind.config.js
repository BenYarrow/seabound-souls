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
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      }
    },
    extend: {
      fontFamily: {
        standard: "'Poppins', sans-serif",
        title: "Donau Neue",
        destinations: "Black Bones Personal Use",
      },
      colors: {
        'white': {  
          DEFAULT: '#FEFAF9',  
          darker: '#D8D8D8',
        }, 
        'blue': {
          lighter: '#97C9CE',
          DEFAULT: '#06637B',

        },
        'orange': '#F4A361',
        'gli' : '',
      }
    },

  },


}


