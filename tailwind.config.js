const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/*.tsx', './components/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'Open Sans'"]
    },
    extend: {
      colors: {
        "dark": "#222",
        "green": "#1F3A3A",
        ...colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
