const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				textColor: '#3d4452',
				textColorHover: '#1a202b'
			}
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif']
		}
	},

	plugins: []
};

module.exports = config;
