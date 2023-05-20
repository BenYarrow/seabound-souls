import React from 'react';
import MauritiusGallery from './GalleryComponents/MauritiusGallery';
import AboutUsLeft from './HomepageComponents/AboutInfoLeft';
import AboutUsRight from './HomepageComponents/AboutInfoRight';


function Mauritius() {
  return (
    <div className='w-full h-auto text-standard '>
        <h1 className='text-xxl text-turquoise text-center py-8'>Mauritius</h1>
      <div className='bg-turquoise text-standard'>
        <AboutUsLeft />
      </div>
      <div className='bg-standard text-turquoise'>
        <AboutUsRight />
      </div>
        <div className='w-full flex justify-center'>
          <MauritiusGallery />
        </div>
    </div>

  )
}

export default Mauritius