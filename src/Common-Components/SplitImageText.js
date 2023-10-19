import React from 'react'

const SplitImageText = (props) => {

    const reverse = props.reverse ?? 'false'

  return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 ">

              <div className={`${reverse === 'true' ? 'md:order-last' : ''} w-full h-96 md:h-full bg-center bg-cover overflow-hidden`}>
              <div className='w-full h-full bg-center bg-cover hover:scale-105 transition duration-300' 
                style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundRepeat: "no-repeat",
                    }}
                > 
              </div>
            </div>

          <div className='flex flex-col space-y-8 w-full'>
            <h4 className='text-left text-2xl lg:text-3xl font-bold'>
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