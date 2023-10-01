import React from 'react'


const Image = (props) => {

  return (
    <div className='w-full h-full'>
      <img src={props.image} alt={props.alt} className={`${props.customClasses} aspect-[5/4] object-fit shadow-xl hover:scale-105 transition duration-300`}/>
    </div>
  )
}

export default Image