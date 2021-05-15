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
        ...colors,

        "amber": "var(--amber)",
        "dark-amber": "var(--dark-amber)",

        green: "var(--green)",
        "dark-green": "var(--dark-green)",
        "light-green": "var(--light-green)",
        black: "var(--black)",
        white: "var(--white)",
        pink: "#BB917B",
        "dark-pink": "#80533C",
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
