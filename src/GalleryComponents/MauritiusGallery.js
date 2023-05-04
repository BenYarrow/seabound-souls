import React from 'react';
import { useState } from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'





const MauritiusGallery = () => {

  const mauritiusImages = [
    {
      imageSrc: 'mauritiusbeach.jpeg',
      imageAlt: 'Mauritius Beach',
    },
    {
      imageSrc: 'underwater-waterfall.jpeg',
      imageAlt: 'Underwater Waterfall',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const length = mauritiusImages.length

  const prevSlide = ({images}) => {
    setCurrentIndex(currentIndex === 0 ? length -1 : currentIndex -1)
  }

  const nextSlide = ({images}) => {
    setCurrentIndex(currentIndex === length -1 ? 0 : currentIndex +1)
  }

  console.log(currentIndex);

  return(
    <div className='relative h-full w-full flex flex-row justify-evenly items-center my-8 '>
      <FaArrowAltCircleLeft className='left-arrow cursor-pointer text-slate-200 text-xxl' onClick={prevSlide} />
        {mauritiusImages.map((image, index) => {
          return(
            <div className={index === currentIndex ? 'flex justify-center' : 'hidden'}  key={index}>
              {index === currentIndex && (<img src={image.imageSrc} alt={image.imageAlt} className='w-4/6 rounded-lg'/>)}
            </div>
            
          )
        })}
      <FaArrowAltCircleRight className='right-arrow cursor-pointer text-slate-200 text-xxl' onClick={nextSlide} />
      
    </div>
    
  )
}

export default MauritiusGallery;