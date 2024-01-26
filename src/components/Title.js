import React from 'react'

const Title = ({
    title, 
    subTitle,
    invert = false,
    h1 = false,
    centreTitle = false,
    firstBlock = false
}) => {

    const classes = [
        'container mx-auto prose prose-h2:uppercase prose-h2:text-4xl',
        'max-w-6xl mb-6 lg:mb-12 flex flex-col items-center',
        invert ? 'prose-h2:text-white prose-h1:text-white prose-p:text-white' : 'prose-h2:text-blue prose-p:text-blue',
        centreTitle && 'prose-h2:text-center prose-h1:text-center',
        firstBlock && 'pt-8 md:pt-12 lg:pt-16 xl:pt-20'
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
                        <>
                            {typeof title === 'string' ? (
                                <h2>
                                    {title}
                                </h2>
                            ) : (
                                title()
                            )}
                        </>
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