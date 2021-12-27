const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors:{
      transparent: 'transparent',
      gray: colors.gray,
      violet: colors.violet,
      neutral: colors.neutral,
      red:{
        DEFAULT:'#cc3a3b',
        light:'#fb839e'
      },
      orange:'#ec9412',
      green:'#1fc586',
      blue:'#2eb1ed'
    },
    extend: {
      boxShadow:{
        'outer':'var(--outer-shadow)',
        'outer-0':'var(--outer-shadow-0)',
        'inner':'var(--inner-shadow)'
      }
    },
  },
  plugins: [],
}
