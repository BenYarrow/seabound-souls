import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import AnimateHeight from 'react-animate-height'


const SplitAccordianImage = (props) => {

  const [activeIndex, setActiveIndex] = useState(-1)
  const reverse = props.reverse ?? 'false'
  const invert = props.invert ?? 'false'

  return (
    <section className={invert !== 'true' ? 'py-20 bg-white text-blue' : 'py-20 bg-blue text-white'}>
      <div className="container mx-auto">

        <div className="flex flex-col items-center pb-12">
          <h3 className="font-title text-4xl uppercase">
            {props.title}
          </h3>
            <p class="pt-4">
            {props.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 ">

          {reverse === 'true' && (
              <div className='w-full h-96 md:h-full bg-center bg-cover shadow-2xl'>
              <div className='w-full h-full bg-center bg-cover' style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: "no-repeat",
                }}> 
              </div>
            </div>
            )}

          <div className='flex flex-col space-y-8 w-full'>
            {props.accordianData.map((data, index) => {
              
              const handleClick = () => {
                activeIndex !== index ? setActiveIndex(index) : setActiveIndex(-1)
              }
              
              return (
                <div className='flex flex-col space-y-2' key={index}>
                  <button onClick={handleClick} className='w-full flex justify-between items-center'>
                      <h3 className='uppercase'>
                          {data.question}
                      </h3>
                      <div class="flex items-center">
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
          
          {reverse !== 'true' && (
            <div className='w-full h-96 md:h-full bg-center bg-cover shadow-2xl'>
            <div className='w-full h-full bg-center bg-cover' style={{
              backgroundImage: `url(${props.image})`,
              backgroundRepeat: "no-repeat",
              }}> 
            </div>
          </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default SplitAccordianImage