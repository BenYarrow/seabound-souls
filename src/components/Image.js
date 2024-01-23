import React from 'react'


const Image = (props) => {

  return (
    <div className='w-full h-full overflow-hidden'>
      <img 
        src={props.image} 
        alt={props.alt} 
        className={`${props.customClasses} object-fit shadow-xl hover:scale-105 transition duration-300`}
        fetchpriority="low"
        loading="lazy"
        crossOrigin
      />
    </div>
  )
}

export default Image