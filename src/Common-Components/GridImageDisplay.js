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

    const backgroundImageClasses = 'lg:absolute w-full h-full object-cover bg-center hover:scale-105 transition duration-300'
    
    return (
        <div ref={ref} class="w-full p-12">
            <motion.div  
                className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-3 gap-4"
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
                <div class="relative aspect-square overflow-hidden lg:row-span-2 lg:row-start-1 lg:col-start-1 lg:col-span-2">
                    <img
                        className={backgroundImageClasses}
                        src={props.imageOne}
                        alt=""
                    /> 
                </div>
                <div class="relative overflow-hidden lg:col-start-3 lg:col-span-2">
                    <img 
                        className={backgroundImageClasses}
                        src={props.imageTwo}
                        alt=""
                    /> 
                </div>

                <div class="relative overflow-hidden lg:row-start-3 lg:col-start-1 lg:col-span-2">
                    <img 
                        className={backgroundImageClasses}
                        src={props.imageThree}
                        alt=""
                    /> 
                </div>
                <div class="relative overflow-hidden lg:col-start-3 lg:col-span-2 lg:row-start-2 lg:row-span-2">
                
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