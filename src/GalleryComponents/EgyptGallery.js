import React from 'react';
import { useState } from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'



const egyptImages = [
  {
    imageSrc: 'Egypt-Images/Dahab-Beach.jpg',
    imageAlt: 'Egypt, Dahab Beach.',
  },
  {
    imageSrc: 'Egypt-Images/Dahab-Safir-1.jpg',
    imageAlt: 'Egypt, Safir Hotel.',
  },
  {
    imageSrc: 'Egypt-Images/Dahab-Swiss-Inn-1.jpg',
    imageAlt: 'Egypt, Swiss Inn hotel.',
  },
  {
    imageSrc: 'Egypt-Images/Dahab-Swiss-Inn-2.jpg',
    imageAlt: 'Egypt, Swiss Inn hotel.',
  },
  {
    imageSrc: 'Egypt-Images/Dahab-Swiss-Inn-3.jpg',
    imageAlt: 'Egypt, Swiss Inn hotel.',
  },
  {
    imageSrc: 'Egypt-Images/Dahab-Swiss-Inn-4.jpg',
    imageAlt: 'Egypt, Swiss Inn hotel.',
  },


]





const EgyptGallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const length = egyptImages.length

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length -1 : currentIndex -1)
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length -1 ? 0 : currentIndex +1)
  }

  
  return(
    <div className='w-3/6 h-auto py-8 flex justify-center'>
      <div className='w-full h-auto mx-8 sm:mx-4 flex justify-between items-center'>
      <FaArrowAltCircleLeft className='text-icon text-turquoise cursor-pointer mx-4' onClick={prevSlide} />

        {egyptImages.map((image, index) => {
            return(
                <div className='' key={index}>
                  {index === currentIndex && (<img  src={image.imageSrc} alt={image.imageAlt} className='rounded-lg'/>)}
                </div>
            )
            })}

      <FaArrowAltCircleRight className='text-icon text-turquoise cursor-pointer mx-4' onClick={nextSlide}/>
      </div>
      
    </div>
    
  )
}

export default EgyptGallery;



