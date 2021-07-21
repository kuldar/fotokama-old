const colors = require('tailwindcss/colors')

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte}'],
  darkMode: false,
	theme: {
		extend: {
      colors: { ...colors }
    },
    fontFamily: {
      base: ['Inter', 'sans-serif'],
      space: ['Space Grotesk', 'sans-serif'],
    }
	},
  variants: {
    extend: {}
  },
	plugins: [],
}

module.exports = config
