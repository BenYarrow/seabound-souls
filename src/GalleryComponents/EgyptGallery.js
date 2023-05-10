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




  

console.log(currentIndex);

  return(
    <div className='w-full h-auto  flex justify-center'>
      <div className='w-full md:w-full h-auto mx-8 sm:mx-4 flex justify-between items-center'>
      <FaArrowAltCircleLeft className='text-icon text-slate-200 cursor-pointer' onClick={prevSlide} />


      {/* Current Image */}
      {egyptImages.map((image, index) => {
          return(
              <div className='w-auto ' key={index}>
                {index === currentIndex && (<img  src={image.imageSrc} alt={image.imageAlt} className='px-8'/>)}
              </div>
          )
          })}



      <FaArrowAltCircleRight className='text-icon text-slate-200 cursor-pointer' onClick={nextSlide} />
      </div>
      
    </div>
    
  )
}

export default EgyptGallery;




      {/* Previus Image */}
      {/* {egyptImages.map((prevImage, prevIndex) => {
        return(
          <div className='' key={prevIndex-1}>
          {prevIndex === currentIndex -1 && (<img width='800px' src={prevImage.imageSrc} alt={prevImage.imageAlt} className='w-1/6 rounded-lg'/>)}
        </div>
        )
      })} */}


            {/* Next Image */}
      {/* {egyptImages.map((nextImage, nextIndex) => {
              return(
                <div className='' key={nextIndex+1}>
                {nextIndex === currentIndex +1 && (<img width='800px' src={nextImage.imageSrc} alt={nextImage.imageAlt} className='w-1/6 rounded-lg'/>)}
              </div>
              )
            })}    */}