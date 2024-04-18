import React from 'react'

const BlockWrapper = ({
    children, 
    invert = false,
    customClasses,
    padded = true,
    container = true,
    relative = true
}) => {

    const classes = [
        padded && 'pt-8 lg:pt-12 pb-8 lg:pb-12',
        invert ? 'bg-blue' : 'bg-white',
        customClasses && customClasses,
        relative && 'relative'
    ].filter(Boolean).join(' ')

  return (
    <section className={classes}>
        <div className={container && 'container mx-auto'}>
            {children}
        </div>
    </section>
  )
}

export default BlockWrapper