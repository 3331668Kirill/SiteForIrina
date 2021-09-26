export const slider1 = {
    imagesUrl: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById('show-prev-btn'),
    showNextBtn: document.getElementById('show-next-btn'),
    slideImage: document.getElementById('slide-img'), 

    start: () => {
        slider1.showPrevBtn.addEventListener('click', slider1.onShowPrevBtnClick)
        slider1.showNextBtn.addEventListener('click', slider1.onShowNextBtnClick)
        
        slider1.showPrevBtn.disabled=true
        
        slider1.imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWlMPdCxLFV1KCKjBT5Kq056wwI4_AJ7b3A&usqp=CAU')
        slider1.imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLKQtkokHKzeFpGr02QCO8uLx3b0NGuushA&usqp=CAU')
        slider1.imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMwSPJF0vu0-WY1ydFfu2AdaSP9IAccOi7g&usqp=CAU')
        slider1.imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCo8lOSqx9hJAOje8IjrGmJ8VbAM9_lz21Kg&usqp=CAU')
        
        slider1.slideImage.src = slider1.imagesUrl[slider1.currentImageIndex]
               
    },

    onShowPrevBtnClick: ()=> {
        slider1.currentImageIndex--
        slider1.slideImage.src = slider1.imagesUrl[slider1.currentImageIndex]
        slider1.showNextBtn.disabled=false
        if (slider1.currentImageIndex === 0){
            slider1.showPrevBtn.disabled=true
        }
    },
    onShowNextBtnClick: ()=> {
        slider1.currentImageIndex++
        slider1.slideImage.src = slider1.imagesUrl[slider1.currentImageIndex]
        slider1.showPrevBtn.disabled=false
        if (slider1.currentImageIndex===(slider1.imagesUrl.length-1)){
            slider1.showNextBtn.disabled=true
        }
        
    }
} 