const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			...colors
		},
		extend: {
			colors: {
				accentColor: '#c36',
				textColor: '#3d4452',
				textColorBold: '#1a202b',
				textColorDark: '#c2c3c7',
				textColorBoldDark: '#ebebec'
			}
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
			serif: ['PT Serif', 'serif'],
			avenir: ['Avenir LT Std'],
			jost: ['Jost', 'sans-serif']
		}
	}
};

module.exports = config;
