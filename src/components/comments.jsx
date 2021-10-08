import React from 'react';
import { rerenderingEntireTree } from '../index.js';


const imagesUrl = []
imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWlMPdCxLFV1KCKjBT5Kq056wwI4_AJ7b3A&usqp=CAU')
imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLKQtkokHKzeFpGr02QCO8uLx3b0NGuushA&usqp=CAU')
imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMwSPJF0vu0-WY1ydFfu2AdaSP9IAccOi7g&usqp=CAU')
imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCo8lOSqx9hJAOje8IjrGmJ8VbAM9_lz21Kg&usqp=CAU')
let currentImageIndex = 0
let disabledN = false
let disabledP = false
let slideImageSrc = imagesUrl[currentImageIndex]

const Comments = () => {

    const showPrevButton = () => {
        disabledN = false
        if (currentImageIndex !== 0) { currentImageIndex-- }
        else disabledP = true
        console.log(currentImageIndex)
        slideImageSrc = imagesUrl[currentImageIndex]
        console.log(slideImageSrc)
        rerenderingEntireTree()
        return slideImageSrc

    }
    const showNextButton = () => {
        disabledP = false
        if (currentImageIndex !== (imagesUrl.length - 1)) { currentImageIndex++ }
        else disabledN = true
        slideImageSrc = imagesUrl[currentImageIndex]
        rerenderingEntireTree()
        return slideImageSrc

    }

    return (
        <div>
             <div className="itk-slider" >

                <button onClick={showPrevButton} disabled={disabledP}> PREV </button>
                <img className='slide-img' src={slideImageSrc} />
                <button onClick={showNextButton} disabled={disabledN}> NEXT </button>
            </div>
        </div>

    )

}

export default Comments;