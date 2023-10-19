import React, { useState } from 'react'
import Image from "../Common-Components/Image";

const WhereToStay = (props) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const accomodations = [
        {
            title: props.accomodationOneTitle,
            details: props.accomodationOneDetails,
            image: props.accomodationOneImage,
            link: props.accomodationOneLink
        },
        {
            title: props.accomodationTwoTitle,
            details: props.accomodationTwoDetails ,
            image: props.accomodationTwoImage,
            link: props.accomodationTwoLink
        }
    ]

    return (
        <div className='flex flex-col'>
            <h3 className='text-left text-3xl lg:text-5xl font-bold pb-8'>
                Where to stay
            </h3>

            <div className='flex space-x-8'>
                {accomodations.map((accomodation, index) => {
                    const handleClick = () => {
                        setActiveIndex(index)
                    } 
                    return(

                        <div onClick={handleClick}>
                            <button className={`${activeIndex === index ? 'bg-blue' : 'bg-blue/40'} rounded-t-lg`}>
                                <h3 className={`${activeIndex === index ? 'text-white' : ''} text-3xl p-4`}>
                                    {accomodation.title}
                                </h3>
                            </button>
                        </div>
                    )
                })}
            </div>
            <div>
                {accomodations.map((accomodation, index) => {
                    return (
                        <div class="bg-blue text-white rounded-b-lg rounded-r-lg">
                            {index === activeIndex && (
                                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8 '>
                                    <div className='flex flex-col space-y-8'>
                                        <p className='text-3xl'>
                                            About the stay
                                        </p>
                                        <p>
                                            {accomodation.details}
                                        </p>
                                        <p>
                                            If you'd like some more informationa bout this accomodation you can visit their website 
                                            <span className='pl-1 font-bold underline'>
                                                <a href={accomodation.link} target="_blank" rel="noreferrer">
                                                    here.
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                    <div className='lg:order-first overflow-hidden'>
                                        <div className='w-full h-80 bg-center bg-cover hover:scale-105 transition duration-300' style={{
                                            backgroundImage: `url(${accomodation.image})`,
                                            backgroundRepeat: "no-repeat",
                                            }}>
                                            
                                        </div>
                                    </div>
                                </div>  
                            )}
                        </div>
                    )
                })}
            </div>
            
        </div>
  )
}

export default WhereToStay