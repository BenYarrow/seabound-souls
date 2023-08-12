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
      sm: '0.8rem',
      base: '1rem',
      xl: '1.5rem',
      xxl: '2rem',
      xxxl: '4.5rem',
      icon:'2.2rem',

     },
  },
  plugins: [
		({ addComponents, theme }) => {
			addComponents({
				// Extending container in the normal way does not allow for max widths to be changed
				'.container': {
					margin: '0 auto',
					padding: '0 1rem',
                    width: '100%',

					'@screen lg': {
						padding: '0 1.5rem'
					}
				}
			}, ['responsive']);
		}
    ],

}


// bg-slate-400 sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-indigo-400
