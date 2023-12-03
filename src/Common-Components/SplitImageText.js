import React from 'react'

const SplitImageText = (props) => {

    const reverse = props.reverse ?? false
    const imageLinkWrapperClasses = 'group-hover:bg-white/60 inset-0 flex items-center justify-center transition duration-300'
    const imageText = props.imageDescription ?? 'Seabound Souls'
    const imageLink = props.imageLink ?? "https://www.instagram.com/seabound.souls/"
    
  return (

        <div className={`${props.image ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'grid grid-cols-1'}  md:gap-12 lg:gap-20`}>
            {props.image && (
              <div className={`${reverse ? 'order-last' : 'order-first'} groupw-full h-80 md:h-96   bg-center bg-cover overflow-hidden`}>
                <div className='w-full h-full bg-center bg-cover hover:scale-105 transition duration-300' 
                  style={{
                      backgroundImage: `url(${props.image})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                      <a href={imageLink} target="_blank" rel="noreferrer" className={imageLinkWrapperClasses}>
                          <p className="text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                              {imageText}
                          </p>
                      </a>  
                          
                </div>
              </div>
            )}

          <div className='flex flex-col space-y-4 lg:space-y-8 w-full'>
            {props.title && (
              <h4 className='text-left text-2xl lg:text-3xl font-bold uppercase'>
                  {props.title}
              </h4>
            )}
            {props.textOne && (
              <p>
                  {props.textOne}
              </p>
            )}
            {props.textTwo && (
              <p>
                  {props.textTwo}
              </p>
            )}
            {props.textThree && (
              <p>
                  {props.textThree}
              </p>
            )}
            {props.textFour && (  
              <p>
                  {props.textFour}
              </p>
            )}
            {props.textFive && (  
              <p>
                  {props.textFive}
              </p>
            )}
          </div>

        </div>
  )
}

export default SplitImageText