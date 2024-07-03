/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    'bg-white', 
    'text-blue', 
    'font-standard',
    'text-lg',
    'text-xl'
  ],  
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        xl: '7rem',
        '2xl': '8rem',
      }
    },
    extend: {
      fontFamily: {
        standard: "'Poppins', sans-serif",
        title: "Donau Neue",
      },
      colors: {
        'white': {  
          DEFAULT: 'hsl(20, 13%, 95%)',  
          darker: 'hsl(0, 0%, 85%)',
        }, 
        'blue': {
          lightest: 'hsl(169, 28%, 89%)',
          lighter: 'hsl(183, 25%, 58%)',
          DEFAULT: 'hsl(192, 89%, 25%)',
          darker: 'hsl(192, 89%, 15%)',

        },
        'orange': 'hsl(11, 61%, 58%)',
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],


}


