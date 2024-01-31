import React from 'react'

const BlockWrapper = ({
    children, 
    invert = false,
    reduceMargin = false,
}) => {

    const classes = [
        invert ? 'bg-blue' : 'bg-white',
        reduceMargin ? 'pb-4 lg:pb-12' : 'py-8 lg:py-12'
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