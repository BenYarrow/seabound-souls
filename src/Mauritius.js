import React from 'react';
import MauritiusGallery from './GalleryComponents/MauritiusGallery';


function Mauritius() {
  return (
    <div className='flex flex-col bg-slate-800 items-center pt-8'>
      <h1 className='text-slate-100 text-xxl pb-8'>Mauritius</h1>
      <div className=''>
        <p className='text-base text-slate-100 '>
        Mauritius is a beautiful island located on the east side of Africa in the Indian Ocean. It is home to one of the most beautiful sites in the world, The Underwater Waterfall.
        </p>
        </div>
        <div className=''>
          <MauritiusGallery />
        </div>
    </div>

  )
}

export default Mauritius