import React from 'react'

const BlockWrapper = ({
    children, 
    invert = false,
    padded = false
}) => {

    const classes = [
        'pt-8 lg:pt-12', 
        invert ? 'bg-blue' : 'bg-white',
        padded && 'pb-8 lg:pb-12',
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