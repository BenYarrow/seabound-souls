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
      },
      colors: {
        'white': {  
          DEFAULT: 'hsl(12, 71%, 99%)',  
          darker: 'hsl(0, 0%, 85%)',
        }, 
        'blue': {
          lighter: 'hsl(185, 36%, 70%)',
          DEFAULT: 'hsl(192, 91%, 25%)',
          darker: 'hsl(192, 91%, 15%)',

        },
        'orange': '#F4A361',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],


}


