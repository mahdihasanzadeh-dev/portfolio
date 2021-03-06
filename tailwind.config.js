const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors:{
      transparent: 'transparent',
      gray: colors.gray,
      white: colors.white,
      neutral: colors.neutral,
      skin:'var(--skin)',
      red:{
        DEFAULT:'#cc3a3b',
        light:'#fb839e'
      },
      orange:'#ec9412',
      green:'#1fc586',
      blue:'#2eb1ed',
      bgOpacity:'rgba(255,255,255,0.5)'
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
        'fadeInTop':'fadeInTop 0.5s ease',
        'fadeOut':'fadeOut 0.3s easee-out'
      },
      keyframes: {
        leftBounce: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25px)' },
        },
        fadeInTop:{
          '0%': { opacity:0,transform: 'translateY(-25px)' },
          '100%': { opacity:1,transform: 'translateY(0px)' },
        },
        fadeOut:{
          '0%': { opacity:1 },
          '100%': { opacity:0 },
        }
      },
      transitionProperty:{
        'margin':'margin'
      }
    },
  },
  plugins: [],
}
