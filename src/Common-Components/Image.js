import React from 'react'


const Image = (props) => {

  return (
    <div className='w-full'>
      <img src={props.image} alt="" className={`${props.customClasses} aspect-[5/4] shadow-xl hover:scale-105 transition duration-300`}/>
    </div>
  )
}

export default Image