import React from 'react';
import MauritiusGallery from './GalleryComponents/MauritiusGallery';


function Mauritius() {
  return (
    <div className='w-full h-auto flex flex-col items-center'>
      <div className='bg-standard h-[8rem] w-full flex justify-center items-center'>
        <h1 className='text-xxl text-turquoise '>Mauritius</h1>
      </div>
      <div className='w-full bg-turquoise text-standard'>
        <p className='text-base py-8'>
          Mauritius is a beautiful island located on the east side of Africa in the Indian Ocean. It is home to one of the most beautiful sites in the world, The Underwater Waterfall.
        </p>
      </div>
        <div className='w-full flex justify-center'>
          <MauritiusGallery />
        </div>
    </div>

  )
}

export default Mauritius