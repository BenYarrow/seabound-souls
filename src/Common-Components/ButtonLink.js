import React from 'react'

const ButtonLink = ({colourClass = 'blue', sizeClass = 'base', linkTo, title}) => {

    const colourClasses = {
        'blue': {
            class: 'border-2 border-blue text-blue hover:text-white hover:bg-blue',
        },
    }

    const sizeClasses = {
        'sm': {
            class: 'px-2 py-1',
        },
        'base': {
            class: 'px-4 py-4 text-xl ',
        },
        'lg': {
            class: 'px-6 py-4 text-2xl',
        }
    }


  return (
    <button className={``}>
        <a href={linkTo} className={`${colourClasses[colourClass].class} ${sizeClasses[sizeClass].class} uppercase font-bold transition duration-200`}>
            {title}
        </a>
    </button>
  )
}

export default ButtonLink