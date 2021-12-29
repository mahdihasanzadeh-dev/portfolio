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

/*-------- portfolio filter and popup ---------*/
(()=>{
    const filterContainer = document.querySelector('.portfolio-filter')
    const portfolioItemsContainer = document.querySelector('.portfolio-items')
    const portfolioItems = document.querySelectorAll('.portfolio-item')
    const popup = document.querySelector('.portfolio-popup')
    const prevBtn = popup.querySelector('.pp-prev')
    const nextBtn = popup.querySelector('.pp-next')
    const closeBtn = popup.querySelector('.pp-close')
    const projectDetailsContainer = popup.querySelector('.pp-details')
    const projectDetailsBtn = popup.querySelector('.pp-project-details-btn')
    let itemIndex,slideIndex,screenShots;
    // filter portfolio items
    filterContainer.addEventListener('click',(event)=>{
     if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
         //deactive existing active 'filter-item'
         filterContainer.querySelector('.active').classList.remove('active','shadow-outer')
         // active new 'filter-item'
         event.target.classList.add("shadow-outer","active")
         const target = event.target.getAttribute('data-target');
         portfolioItems.forEach((item)=>{
             if(target===item.getAttribute('data-category') || target==='all'){
                item.classList.remove('hide')
                item.classList.add('show')
             }else{
                 item.classList.remove('show')
                 item.classList.add('hide')
             }
         })
     }
    })
})();