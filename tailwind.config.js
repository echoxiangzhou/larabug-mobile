const {colors} = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  darkMode: 'media', // or 'media' or 'class'
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
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
