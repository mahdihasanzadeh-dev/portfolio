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
        'inner':'var(--inner-shadow)',
        'inner-0':'var(--inner-shadow-0)'
      },
      animation:{
        'spin-slow':'spin 10s linear infinite',
        'bounce-slow':'bounce 2s ease-in-out infinite',
        'leftBounce':'leftBounce 3s ease-in-out infinite',
        'fadeInTop':'fadeInTop 0.5s ease'
      },
      keyframes: {
        leftBounce: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25px)' },
        },
        fadeInTop:{
          '0%': { opacity:0,transform: 'translateY(-25px)' },
          '100%': { opacity:1,transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
}
