import React from 'react'

const Title = ({
    title, 
    subTitle,
    invert = false,
    h1 = false
}) => {

    const classes = [
        'container mx-auto prose prose-h2:uppercase prose-h2:text-4xl',
        'max-w-6xl mb-6 lg:mb-12 flex flex-col items-center',
        (invert === true) ? 'prose-h2:text-white prose-h1:text-white prose-p:text-white ' : 'prose-h2:text-blue prose-p:text-blue'
    ].join(' ')

    return (
        <div class={classes}>
            {title && (
                <>
                    {h1 ? (
                        <h1>
                            {title}
                        </h1>
                    ) : (
                        <h2>
                            {title}
                        </h2>
                    )}
                </>
            )}
            {subTitle && (
                <p>
                    {subTitle}
                </p>
            )}
        </div>
    )
}

export default Title