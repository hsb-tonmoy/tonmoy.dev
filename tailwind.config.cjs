const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				textColor: '#3d4452',
				textColorDark: '#1a202b'
			}
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
			serif: ['PT Serif', 'serif']
		}
	}
};

module.exports = config;
