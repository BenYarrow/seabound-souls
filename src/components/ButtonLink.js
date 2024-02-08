import React from 'react'

const ButtonLink = ({
    colourClass = 'blue-outline', 
    sizeClass = 'base', 
    linkTo, 
    title, 
    customClasses = '',
    type = '',
}) => {

    const colourClasses = {
        'blue': {
            class: 'relative px-8 py-2 bg-blue text-xl text-white uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-300',
        },
        'blue-outline': {
            class: 'border-2 border-blue text-blue hover:text-white hover:bg-blue',
        },
        'white-outline': {
            class: 'border-2 border-white text-white hover:text-blue hover:bg-white'
        }
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
    <button className={customClasses}>
        <a href={linkTo} className={`${colourClasses[colourClass].class} ${sizeClasses[sizeClass].class} uppercase font-bold transition duration-200`}>
            {title}
        </a>
    </button>
  )
}

export default ButtonLink