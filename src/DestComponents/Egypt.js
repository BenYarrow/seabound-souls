import React from 'react';
import EgyptGallery from '../GalleryComponents/EgyptGallery';

const Egypt = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center'>
      <div className='bg-standard h-[8rem] w-full flex justify-center items-center'>
        <h1 className='text-xxl text-turquoise '>Egypt</h1>
      </div>
      <div className='w-full bg-turquoise text-standard'>
        <p className='text-base py-8'>
          Egypt is a beautiful place
        </p>
      </div>
        <div className='w-full flex justify-center'>
          <EgyptGallery />
        </div>
    </div>
  )
}

export default Egypt;