module.exports = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				blue: '#0096F7',
				black: '#1C1C1C',
				grey: '#F9FBFB'
			},
			screens: {
				'3xl': '1900px',
				'4xl': '2300px'
			}
		}
	}
};
