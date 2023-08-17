/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', '../shared/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			silka: ['Silka']
		},
		screens: {
			sm: '479px',
			md: '768px',
			lg: '992px',
			xl: '1280px',
			'2xl': '1536px'
		},
		colors: {
			neutral: {
				25: '#FBFBFB',
				50: '#F3F3F3',
				100: '#E4E4E4',
				150: '#D8D8D8',
				175: '#BDBDBD',
				300: '#777777',
				400: '#555555',
				500: '#3A3A3A',
				700: '#222222'
			}
		}
	},
	plugins: []
};
