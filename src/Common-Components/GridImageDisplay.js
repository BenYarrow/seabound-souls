import React from 'react'
import { useEffect, useRef } from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";


const GridImageDisplay = (props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    })

    const backgroundImageClasses = 'absolute w-full h-full object-cover bg-center hover:scale-105 transition duration-300'
    
    return (
        <div ref={ref} className="w-full">
            <motion.div  
                className="grid grid-cols-4 grid-rows-3 gap-4"
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                  }}
                  initial= 'hidden'
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
            >
                <div className="relative aspect-square overflow-hidden row-span-2 row-start-1 col-start-1 col-span-2">
                    <img
                        className={backgroundImageClasses}
                        src={props.imageOne}
                        alt=""
                    /> 
                </div>
                <div className="relative overflow-hidden col-start-3 col-span-2">
                    <img 
                        className={backgroundImageClasses}
                        src={props.imageTwo}
                        alt=""
                    /> 
                </div>

                <div className="relative overflow-hidden row-start-3 col-start-1 col-span-2">
                    <img 
                        className={backgroundImageClasses}
                        src={props.imageThree}
                        alt=""
                    /> 
                </div>
                <div className="relative overflow-hidden col-start-3 col-span-2 row-start-2 row-span-2">
                
                    <img 
                        className={backgroundImageClasses}
                        src={props.imageFour}
                        alt=""
                    /> 
                </div>          
                
            </motion.div>
        </div>
    )
}

export default GridImageDisplay