import React from 'react';
import GalleryText from './GalleryComponents/GalleryText';
import EgyptGallery from './GalleryComponents/EgyptGallery';

const Egypt = () => {
  return (
    <div className='w-full flex-col h-auto mt-4 '>
        <h1 className='text-slate-200 text-xxl mb-4 text-center'>
            Egypt
        </h1>
    <div className='flex flex-col sm:flex-row  '>
        <div className='w-full md:w-3/6 pl-4 '>
            <GalleryText
            title='Egypt'
            aboutLocation=''          
            />
        </div>
        <div className='w-auto sm:w-3/6'>
            <EgyptGallery />
        </div>
    </div>
  </div>
  )
}

export default Egypt;