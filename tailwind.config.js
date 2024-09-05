/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#ffa800',
					dark: '#b17c11'
				},
				secondary: {
					DEFAULT: '#1D082E',
					dark: '#0f0a17'
				},
				tag: {
					web: '#087ea4',
					'2d_game': '#3689c9',
					'3d_game': '#0f0f14',
					independent: '#8f18da',
					commercial: '#22a753'
				},
				principal: {
					red: '#e3646e',
					purple: '#bb72e9',
					blue: '#3996db',
					green: '#82bc4f',
					yellow: '#eabd5f'
				},
				gray: {
					100: '#0d0e11',
					200: '#16181d',
					300: '#292c34',
					400: '#878ea1',
					500: '#c0c4ce',
					600: '#e2e4e9'
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
		require('@tailwindcss/typography'),

		function ({ addUtilities }) {
			const newUtilities = {
				'.grid-custom-layout': {
					width: '100%',
					minHeight: '100vh',
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
