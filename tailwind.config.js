const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors:{
      transparent: 'transparent',
      gray: colors.gray,
      violet: colors.violet,
      red:{
        DEFAULT:'#cc3a3b',
        light:'#fb839e'
      },
      orange:'#ec9412',
      green:'#1fc586',
      blue:'#2eb1ed'
    },
    extend: {},
  },
  plugins: [],
}
