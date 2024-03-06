import React from 'react'

const BlockWrapper = ({
    children, 
    invert = false,
    customClasses,
    padded = false,
    container = true
}) => {

    const classes = [
        padded ? 'py-12' : 'py-8',
        invert ? 'bg-blue' : 'bg-white',
        customClasses && customClasses
    ].join(' ')

  return (
    <section className={classes}>
        <div className={container && 'container mx-auto'}>
            {children}
        </div>
    </section>
  )
}

export default BlockWrapper