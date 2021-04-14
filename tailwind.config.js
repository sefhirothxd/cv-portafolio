const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				greenLight: '#42E2B8',
				greyBlack: '#0F0A0A',
				morado: '#8884FF',
				amarrillo: '#FAD7A1',
				rojoBlack: '#E96D71',
			},
			boxShadow: {
				caja: '-4px 4px 14px rgba(0, 0, 0, 0.25)',
			},
			fontFamily: {
				body: ['Oxygen'],
			},
			maxWidth: {
				960: '960px',
				1024: '1024px',
				1280: '1280px',
				1132: '1132px',
				550: '550px',
				340: '340px',
			},
			width: {
				680: '680px',
			},
			fontSize: {
				'14px': '14px',
				'34px': '34px',
			},
			margin: {
				17: '4.25rem',
				18: '4.50rem',
				19: '4.75rem',
			},
			boxShadow: {
				showTitle: '-4px 4px 0px #FFFFFF',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
