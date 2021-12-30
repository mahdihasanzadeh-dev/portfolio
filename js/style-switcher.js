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


    function setActiveStyle(selectedColor){
        const root = document.querySelector(':root');
        const rootStyle = getComputedStyle(root);
        if(rootStyle.getPropertyValue('--skin')!==selectedColor){
            root.style.setProperty('--skin', selectedColor);
        }
        
    }