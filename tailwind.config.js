/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        standard: "'Catamaran', sans-serif",
      },
      colors: {
        'standard': '#FEFAF9',  
        'turquoise': '#05748B',
        'orange': '#F4A361',
      }
    },
    fontSize: {
      sm: '1rem',
      base: '1.2rem',
      xl: '1.5rem',
      xxl: '3rem',
      xxxl: '4.5rem',
      icon:'2.2rem',

     },
  },
  plugins: [],
}


// bg-slate-400 sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-indigo-400
