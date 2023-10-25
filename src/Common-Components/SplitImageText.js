import React from 'react'

const SplitImageText = (props) => {

    const reverse = props.reverse ?? false
    const imageLinkWrapperClasses = 'group-hover:bg-white/60 w-full h-full flex items-center justify-center transition duration-300'

  return (

        <div className={`${props.image ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'grid grid-cols-1'}  md:gap-12 lg:gap-20`}>
            {props.image && (
              <div className={`${reverse ? 'order-last' : 'order-first'} w-full h-80 md:h-96 aspect-square bg-center bg-cover overflow-hidden`}>
                <div className='w-full h-full bg-center bg-cover hover:scale-105 transition duration-300' 
                  style={{
                      backgroundImage: `url(${props.image})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {props.imageDescription != null && (
                        <>
                        {props.imageLink != null ? (
                            <a href={props.imageLink} target="_blank" rel="noreferrer" className={imageLinkWrapperClasses}>
                                <p href={props.imageLink} class="text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                                    {props.imageDescription}
                                </p>
                            </a>
                        ) : (
                            <div className={imageLinkWrapperClasses}>
                                <p href={props.imageLink} class="text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                                    {props.imageDescription}
                                </p>
                            </div>
                        )}
                        </>
                    )} 
                </div>
              </div>
            )}

          <div className='flex flex-col justify-center space-y-4 lg:space-y-8 w-full'>
            <h4 className='text-left text-2xl lg:text-3xl font-bold uppercase'>
                {props.title}
            </h4>
            <p>
                {props.text}
            </p>
          </div>

        </div>
  )
}

export default SplitImageText