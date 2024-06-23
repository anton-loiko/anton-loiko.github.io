/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#FFA800',
					dark: '#b17c11'
				},

				secondary: {
					DEFAULT: '#1D082E'
				}
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				bebas: ['Bebas', 'sans-serif'],
				lilita: ['Lilita', 'sans-serif'],
				eczar: ['Eczar', 'serif']
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.grid-custom-layout': {
					width: '100vw',
					height: '100vh',
					display: 'grid',
					gridTemplateAreas: `
					"h h h"
					"m m m"
					"f f f"
					`,

					gridTemplateRows: 'auto 1fr auto',
					gridTemplateColumns: '1fr'
				},
				'.area-header': { gridArea: 'h' },
				'.area-main': { gridArea: 'm' },
				'.area-footer': { gridArea: 'f' }
			};

			addUtilities(newUtilities, ['responsive', 'hover']);
		}
	]
};
