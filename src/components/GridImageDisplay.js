import React from 'react'

const GridImageDisplay = (props) => {

    const backgroundImageClasses = 'absolute w-full h-full object-cover bg-center hover:scale-105 transition duration-300'
    
    return (
        <div className="w-full">
            <div className="grid grid-cols-4 grid-rows-3 gap-4">
                {props.imageOne && (
                    <div className="relative aspect-square overflow-hidden row-span-2 row-start-1 col-start-1 col-span-2">
                        <img
                            className={backgroundImageClasses}
                            src={props.imageOne}
                            alt=""
                            fetchpriority="low"
                            loading="lazy"
                            crossOrigin
                        /> 
                    </div>
                )}

                {props.imageTwo && (

                    <div className="relative overflow-hidden col-start-3 col-span-2">
                        <img 
                            className={backgroundImageClasses}
                            src={props.imageTwo}
                            alt=""
                            fetchpriority="low"
                            loading="lazy"
                            crossOrigin
                        /> 
                    </div>
                )}

                {props.imageThree && (
                    <div className="relative overflow-hidden row-start-3 col-start-1 col-span-2">
                        <img 
                            className={backgroundImageClasses}
                            src={props.imageThree}
                            alt=""
                            fetchpriority="low"
                            loading="lazy"
                            crossOrigin
                        /> 
                    </div>
                )}
                {props.imageFour && (
                    <div className="relative overflow-hidden col-start-3 col-span-2 row-start-2 row-span-2">
                    
                        <img 
                            className={backgroundImageClasses}
                            src={props.imageFour}
                            alt=""
                            fetchpriority="low"
                            loading="lazy"
                            crossOrigin
                        /> 
                    </div>          
                )}
                
            </div>
        </div>
    )
}

export default GridImageDisplay