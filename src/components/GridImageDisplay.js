import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

const GridImageDisplay = (props) => {

    const backgroundImageClasses = 'absolute w-full h-full object-cover bg-center hover:scale-105 transition duration-300'
    
    const ref = useRef(null)
    const isRefInView = useInView(ref, {once: true})
    
    const mainControls = useAnimation()
  
    useEffect(() => {
      if (isRefInView) {
        mainControls.start('visible')
      }
    }, [isRefInView,  mainControls])

    return (
        <div ref={ref}>
            <motion.div className="grid grid-cols-4 grid-rows-3 gap-4"
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                  }}
                  initial= 'hidden'
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.5
                  }}
            >
                {props.imageOne && (
                    <div className="relative aspect-square overflow-hidden row-span-2 row-start-1 col-start-1 col-span-2">
                        <img
                            className={backgroundImageClasses}
                            src={props.imageOne}
                            alt=""
                            fetchpriority="low"
                            loading="lazy"
                            crossOrigin="true"
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
                            crossOrigin="true"
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
                            crossOrigin="true"
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
                            crossOrigin="true"
                        /> 
                    </div>          
                )}
                
            </motion.div>
        </div>
    )
}

export default GridImageDisplay