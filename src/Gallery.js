import React from 'react'

const images = [
  {
    imageSrc: 'HomepageImage.jpeg', 
    imageAlt: 'test',
  },
  {
    imageSrc: 'underwater-waterfall.jpeg', 
    imageAlt: 'test',
  },
]

const GalleryImage = ({imageSrc, imageAlt = 'An Image by Yarrow Travels'}) => {
  return(
    <div className='border-x-2 border-slate-400 px-20'>
      <img src={imageSrc} alt={imageAlt}  className='rounded-lg sm: w-48 '/>
    </div>
  )
}

function Gallery() {
  return (
    <div className='my-20 flex justify-center items-center'>
      {/* <div className='px-20'>
        test
      </div> */}
      {images.map(imageInfo => <GalleryImage {...imageInfo}/>)}
      {/* <div className='px-20'>
        test
      </div> */}
    </div>
  )
}

export default Gallery
