import React from 'react'

const GalleryText = (props) => {
  return (
    <div className=''>
      <div>
        <p className='text-slate-200 text-base md:text-xl font-light pt-8'>{props.aboutLocation}</p>
        </div>
        <div>
        <p className='text-slate-200 text-sm md:text-base font-light text-right pt-4'> Learn more about {props.title} <a href={props.link} className='underline cursor-pointer'>here.</a></p>
        </div>
    </div>
  )
}

export default GalleryText