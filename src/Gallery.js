import React from 'react'
import EgyptGallery from './GalleryComponents/EgyptGallery';
import MauritiusGallery from './GalleryComponents/MauritiusGallery';

const Gallery = () => {
  return (
    <div className='w-full h-auto'>
        <MauritiusGallery />
        <EgyptGallery />
        
    </div>
  )
}

export default Gallery;