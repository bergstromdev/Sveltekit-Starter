const STORAGE_KEY = 'theme';

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getTheme = () => {
	if (typeof localStorage !== 'undefined') {
		return localStorage.getItem(STORAGE_KEY) || defaultTheme;
	}
	return defaultTheme;
};

const setTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
};

setTheme(getTheme());

const themeObserver = new MutationObserver(() => {
	const nextTheme = document.documentElement.dataset.theme;
	if (nextTheme) {
		localStorage.setItem(STORAGE_KEY, nextTheme);
	}
});

themeObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-theme']
});

const toggleTheme = () => {
	const currentTheme = getTheme();
	const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
	setTheme(nextTheme);
};

window.toggleTheme = toggleTheme;
