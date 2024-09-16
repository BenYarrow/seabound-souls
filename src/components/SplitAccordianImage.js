import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import AnimateHeight from 'react-animate-height'


const SplitAccordianImage = ({
  title, 
  subtitle,
  customImageClasses = '',
  image,
  accordianData,
  reverse = false,
  invert = false
}) => {

  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <section className={invert ? 'py-20 bg-white text-blue' : 'py-20 bg-blue text-white'}>
      <div className="container mx-auto">

        <div className="flex flex-col items-center pb-12">
          {title && (
            <h3 className=" text-4xl uppercase">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="pt-4">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`${image ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'grid grid-cols-1'}  md:gap-12 lg:gap-20`}>

          {image &&   (
            <div className={`${reverse ? 'order-last' : 'order-first'} w-full h-80 md:h-96 aspect-square overflow-hidden`}>
              <div className={`${customImageClasses} w-full h-full bg-cover hover:scale-105 transition duration-300`} 
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                </div>
              
            </div>
            )}

          <div className='flex flex-col space-y-8 w-full'>
            {accordianData.map((data, index) => {
              
              const handleClick = () => {
                activeIndex !== index ? setActiveIndex(index) : setActiveIndex(-1)
              }
              
              return (
                <div className='flex flex-col space-y-2' key={index}>
                  <button onClick={handleClick} className='w-full flex justify-between items-center'>
                      <h3 className='uppercase'>
                          {data.question}
                      </h3>
                      <div className="flex items-center">
                        <p className="hidden lg:block lg:pr-2 uppercase tranition duration-300">{activeIndex !== index ? 'Open' : 'Close'}</p>
                        <FontAwesomeIcon icon={activeIndex !== index ? faPlus : faMinus} />
                      </div>
                  </button>
                  
                  <AnimateHeight 
                    duration={300}
                    height={activeIndex === index ? 'auto' : 0}
                  >
                    <p>
                      {data.answer}
                    </p>
                  </AnimateHeight>
                  
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default SplitAccordianImage