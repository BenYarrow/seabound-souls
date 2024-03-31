import React from 'react'

const BlockWrapper = ({
    children, 
    invert = false,
    customClasses,
    firstBlock = false,
    container = true
}) => {

    const classes = [
        'pb-8 lg:pb-12',
        firstBlock && 'pt-8 lg:pt-12',
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