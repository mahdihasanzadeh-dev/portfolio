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

function bodyScrollingToggle(){
    document.body.classList.toggle('hidden-scrolling')
}

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

    portfolioItemsContainer.addEventListener('click',(event)=>{
      if(event.target.closest('.portfolio-item-inner')){
          const portfolioItem = event.target.closest('.portfolio-item-inner').parentElement;
          //get the portfolioItem index
          itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem)
          screenShots = portfolioItems[itemIndex].querySelector('.portfolio-item-img img').getAttribute('data-screenshots')
          //convert screenshots to array
          screenShots = screenShots.split(',')
          if(screenShots.length===1){
              nextBtn.style.display = 'none'
              prevBtn.style.display = 'none'
          }else{
            nextBtn.style.display = 'block'
            prevBtn.style.display = 'block'
          }
          slideIndex =0;
          popupToggle()
          popupSlideshow()
          popupDetails()
      }
    })

    closeBtn.addEventListener('click',()=>{
        popupToggle()
        if( projectDetailsContainer.classList.contains('active')){
            popupDetailsToggle()
        }
    })

    function popupToggle(){
        popup.classList.toggle('open')
        bodyScrollingToggle()
    }
    function popupSlideshow(){
        const imgSrc = screenShots[slideIndex].trim()
        const popupImg = popup.querySelector('.pp-img')
        // activate loader until the popup image loaded
        popup.querySelector('.pp-loader').classList.add('active')
        popupImg.setAttribute('src',imgSrc)
        popupImg.onload = ()=>{
            // deactivate loader after the popup image loaded
            popup.querySelector('.pp-loader').classList.remove('active')
        }
        popup.querySelector('.pp-counter').innerHTML = `${slideIndex+1} of ${screenShots.length}`
    }

    //next slide
    nextBtn.addEventListener('click',()=>{
        if(slideIndex===screenShots.length-1){
            slideIndex =0
        }else{
            slideIndex++
        }
        popupSlideshow()
    })
    //prev slide
    prevBtn.addEventListener('click',()=>{
        if(slideIndex===0){
            slideIndex =screenShots.length-1
        }else{
            slideIndex--
        }
        popupSlideshow()
    })

    function popupDetails(){
        //if project details not exist remove project details btn
        if(! portfolioItems[itemIndex].querySelector('.portfolio-item-details')){
            projectDetailsBtn.style.display = 'none'
            return;
        }
 
        projectDetailsBtn.style.display = 'block'
        //get the project details
        const details = portfolioItems[itemIndex].querySelector('.portfolio-item-details').innerHTML;
        //set the project details
        popup.querySelector('.pp-project-details').innerHTML = details;
        //get the project title
        const title = portfolioItems[itemIndex].querySelector('.portfolio-item-title').innerHTML;
        //set the project title
        popup.querySelector('.pp-title h2').innerHTML = title;
        //get the project category
        const category = portfolioItems[itemIndex].getAttribute('data-category');
        //set the project category
        popup.querySelector('.pp-project-category').innerText = category.split('-').join(' ');
    }

    projectDetailsBtn.addEventListener('click',()=>{
        popupDetailsToggle()
    })
    //toggle project details
    function popupDetailsToggle(){
        if( projectDetailsContainer.classList.contains('active')){
            projectDetailsBtn.querySelector('i').classList.remove('fa-minus')
            projectDetailsBtn.querySelector('i').classList.add('fa-plus')
            projectDetailsContainer.classList.remove('active')
            projectDetailsContainer.style.maxHeight ='0px'
        }else{
            projectDetailsBtn.querySelector('i').classList.remove('fa-plus')
            projectDetailsBtn.querySelector('i').classList.add('fa-minus')
            projectDetailsContainer.classList.add('active')
            projectDetailsContainer.style.maxHeight = `${projectDetailsContainer.scrollHeight}px`
            popup.scrollTo(0,projectDetailsContainer.offsetTop)
        }
       
    }

})();