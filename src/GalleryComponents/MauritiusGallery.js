import React from 'react';
import { useState } from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'



const mauritiusImages = [
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-1.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
  },
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-2.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
  },

]





const MauritiusGallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const length = mauritiusImages.length

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length -1 : currentIndex -1)
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length -1 ? 0 : currentIndex +1)
  }




  

console.log(currentIndex);

  return(
    <div className='w-3/6 h-auto py-8 flex justify-center'>
      <div className='w-full h-auto mx-8 sm:mx-4 flex justify-between items-center'>
        <FaArrowAltCircleLeft className='text-icon  text-turquoise cursor-pointer mx-4' onClick={prevSlide} />
          {mauritiusImages.map((image, index) => {
              return(
                  <div className='' key={index}>
                    {index === currentIndex && (<img  src={image.imageSrc} alt={image.imageAlt} className='rounded-lg'/>)}
                  </div>
              )
              })}
        <FaArrowAltCircleRight className='text-icon text-turquoise cursor-pointer mx-4' onClick={nextSlide} />
      </div>
    </div>
  )
}

export default MauritiusGallery;


