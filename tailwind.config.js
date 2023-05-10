/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.5rem',
      xxl: '3rem',
      mobileIcon:'8rem',
      icon: '10rem',
     }
  },
  plugins: [],
}


// bg-slate-400 sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-indigo-400
