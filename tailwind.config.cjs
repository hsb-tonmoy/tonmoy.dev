const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
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
			jost: ['Jost', 'sans-serif']
		}
	}
};

module.exports = config;
