import React, { Children } from 'react'

const BlockWrapper = ({
    children, 
    invert = false,
}) => {

    const classes = [
        'py-8 lg:py-20 ',
        invert ? 'bg-blue' : 'bg-white'
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