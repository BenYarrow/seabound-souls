import React from 'react'

const BlockWrapper = ({
    children, 
    invert = false,
    firstBlock = false,
    customClasses
}) => {

    const classes = [
        firstBlock ? 'py-8' : 'pb-8',
        invert ? 'bg-blue' : 'bg-white',
        customClasses && customClasses
    ].join(' ')

  return (
    <section className={classes}>
        <div className='container mx-auto'>
            {children}
        </div>
    </section>
  )
}

export default BlockWrapper