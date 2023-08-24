/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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


