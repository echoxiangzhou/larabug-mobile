const {colors} = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.red,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
