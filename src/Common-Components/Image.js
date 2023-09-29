import React from 'react'


const Image = (props) => {
  return (
    <img src={props.image} alt="" className={`${props.imageClasses} shadow-xl hover:scale-110 transition duration-300`}/>
  )
}

export default Image