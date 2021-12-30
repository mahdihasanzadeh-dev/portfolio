/*---------- toggle style switcher ----------*/
    const styleSwitcher = document.querySelector('.style-switcher')
    const styleSwitcherToggler = document.querySelector('.style-switcher-toggler')
    styleSwitcherToggler.addEventListener('click',()=>{
        styleSwitcher.classList.toggle('open')
    })
    //hide style switcher on scroll
    window.addEventListener('scroll',()=>{
        if( styleSwitcher.classList.contains('open')){
            styleSwitcher.classList.remove('open')
        }
    })

    const colors =document.querySelectorAll('.colors span')
    colors.forEach(color=>color.addEventListener('click',setActiveStyle))
    function setActiveStyle(event){
        const selectedColor = event.target.getAttribute('data-color')
        const root = document.querySelector(':root');
        const rootStyle = getComputedStyle(root);
        if(rootStyle.getPropertyValue('--skin')!==selectedColor){
            root.style.setProperty('--skin', selectedColor);
        }
    }
    
/*-----------------light and dark mode ------------ */
const dayNight = document.querySelector('.day-night')
window.addEventListener('load',()=>{
    if(document.documentElement.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun')
    }else{
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})
document.addEventListener('DOMContentLoaded',()=>{
    const theme = getTheme()
    document.documentElement.classList.add(theme)
})
dayNight.addEventListener('click',()=>{
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    const theme = getTheme()
    if (theme === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme','day')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
      }
    // document.documentElement.classList.toggle('dark')
})

function getTheme(){
    let theme;
    if(localStorage.getItem('theme')===null){
        theme='day'
    }else{
        theme = localStorage.getItem('theme')
    }
    return theme
}