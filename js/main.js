/*-------- about section tabs ---------*/
(()=>{
    const aboutSection = document.querySelector('.about-section')
    const tabsContainer = document.querySelector('.about-tabs')
    tabsContainer.addEventListener('click',(event)=>{
        if(event.target.classList.contains("tab-item")&& !event.target.classList.contains("active")){
           const target =event.target.getAttribute('data-target');
           //deactive existing active 'tab-item'
           tabsContainer.querySelector('.active').classList.remove("shadow-outer","active")
           // active new 'tab-item'
           event.target.classList.add("shadow-outer","active")
            //deactive existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active")
             // active new 'tab-content'
            aboutSection.querySelector(target).classList.add("active")
        }
    })
})();