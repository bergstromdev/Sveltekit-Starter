import themes from 'daisyui/src/theming/themes';

const themeOverrides = {
	primary: '#d30000',
	'--rounded-btn': 'calc(infinity * 1px)'
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		fontFamily: {
			sans: '"Rubik Variable", sans-serif'
		},
		container: {
			center: true,
			padding: 'var(--container-padding)'
		},
		extend: {}
	},
	daisyui: {
		themes: [
			{ light: { ...themes.light, ...themeOverrides } },
			{ dark: { ...themes.dark, ...themeOverrides, 'base-100': 'hsl(222, 20%, 5%)' } }
		]
	},
	plugins: [require('daisyui')]
};
