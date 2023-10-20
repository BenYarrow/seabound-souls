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
        },
        {
            title: props.accomodationThreeTitle,
            details: props.accomodationThreeDetails ,
            image: props.accomodationThreeImage,
            link: props.accomodationThreeLink
        },
    ]

    return (
        <div className='flex flex-col space-y-8'>
            <h4 className='text-left text-2xl lg:text-3xl font-bold'>
                Where to stay
            </h4>
                <div className='flex '>
                    {accomodations.map((accomodation, index) => {
                        const handleClick = () => {
                            setActiveIndex(index)
                        } 
                        return(

                            <div onClick={handleClick}>
                                <button className={`${activeIndex === index ? '' : ''}`}>
                                    <h3 className={`${activeIndex === index ? 'border-b-2 border-blue' : ''} font-bold text-3xl `}>
                                        {accomodation.title} 
                                    </h3>
                                </button>
                                {index < accomodations.length-1 && (
                                <span className="text-3xl px-2">
                                    /
                                </span>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div>
                    {accomodations.map((accomodation, index) => {
                        return (
                            <div>
                                {index === activeIndex && (
                                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8  '>
                                        <div className='lg:order-last overflow-hidden'>
                                            <div className='w-full h-80 bg-center bg-cover hover:scale-105 transition duration-300' style={{
                                                backgroundImage: `url(${accomodation.image})`,
                                                backgroundRepeat: "no-repeat",
                                                }}>
                                                
                                            </div>
                                        </div>
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