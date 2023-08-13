/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        standard: "'Catamaran', sans-serif",
        navbar: "Donau Neue",
        destinations: "BlackBones",
      },
      colors: {
        'standard': '#FEFAF9',  
        'blue': '#05748B',
        'orange': '#F4A361',
      }
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
