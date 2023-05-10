import React from 'react'
import EgyptGallery from './GalleryComponents/EgyptGallery';
import MauritiusGallery from './GalleryComponents/MauritiusGallery';
import GalleryText from './GalleryComponents/GalleryText.js'

const Gallery = () => {
  return (
    <div className='w-full flex-col h-auto mt-4 '>
      <h1 className='text-slate-200 text-xxl mb-4 text-center'>Mauritius</h1>
      <div className='flex flex-col sm:flex-row mb-8 '>
        <div className='w-auto sm:w-3/6'>
          <MauritiusGallery />
        </div>
        <div className='w-full md:w-3/6 pl-4'>
          <GalleryText
            title='Mauritius'
            aboutLocation='Mauritius is a beautiful island located on the east side of Africa in the Indian Ocean. It is home to one of the most beautiful sites in the world, The Underwater Waterfall.'          
            link='Mauritius.js'
          />
        </div>
      </div>


      <h1 className='text-slate-200 text-xxl mb-4 text-center'>Egypt</h1>
      <div className='flex flex-col sm:flex-row  '>
      <div className='w-full md:w-3/6 pl-4 '>
          <GalleryText
            title='Mauritius'
            aboutLocation='Mauritius is a beautiful island located on the east side of Africa in the Indian Ocean. It is home to one of the most beautiful sites in the world, The Underwater Waterfall.'          
            link='Mauritius.js'
          />
        </div>
        <div className='w-auto sm:w-3/6'>
          <EgyptGallery />
        </div>
      </div>
    </div>
  )
}

export default Gallery;