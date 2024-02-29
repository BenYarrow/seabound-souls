import React from 'react'

const BlockWrapper = ({
    children, 
    invert = false,
    customClasses
}) => {

    const classes = [
        'py-8',
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