/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			general: ['general', 'sans-serif'],
			'Galindo-Regular': ['Galindo-Regular', 'sans-serif'],
			'Montserrat-Light': ['Montserrat-Light', 'sans-serif'],
			'NotoSans-VariableFont': ['NotoSans-VariableFont', 'sans-serif'],
			'OpenSans-VariableFont': ['OpenSans-VariableFont', 'sans-serif'],
			'Roboto-Bold': ['Roboto-Bold', 'sans-serif'],
			'Roboto-Light': ['Roboto-Light', 'sans-serif'],
			'Helvetica-Bold': ['Helvetica-Bold', 'sans-serif'],
			'MerriweatherSans-ExtraBold': ['MerriweatherSans-ExtraBold', 'sans-serif'],
			'MerriweatherSans': ['MerriweatherSans', 'sans-serif'],
			'TitilliumWeb-Black': ['TitilliumWeb-Black', 'sans-serif']
		  },
		  colors: {
			pink: {
			  50: '#f2e1f0',
			  100: '#f0d1ec',
			  150: '#f5baed',
			  200: '#f0afe7',
			  300: '#d993cf'
			},
		  },
		},
	  },
	plugins: [],
}
