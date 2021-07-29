module.exports = {
	purge: {
		enabled: false,
		content: [
			'./layout/*.liquid',
			'./sections/*.liquid',
			'./snippets/*.liquid',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
