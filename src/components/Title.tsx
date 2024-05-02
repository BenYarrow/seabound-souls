import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import {defaultProseClasses} from "../helpers/functions"

interface TitleProps {
    title: string
    subtitle?: any
    invert?: boolean
    h1?: boolean
    centreHeading?: boolean
    padded?: boolean
}

const Title = ({
    title, 
    subtitle,
    invert = false,
    h1 = false,
    centreHeading = false,
    padded = true
}: TitleProps) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
  
    const mainControls = useAnimation()
  
    useEffect(() => {
      if (isInView) {
        mainControls.start('visible')
      }
    }, [isInView,  mainControls])

    console.log(centreHeading)
    return (
        <motion.div
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
            <div className={defaultProseClasses({ invert })} ref={ref}>
                <div className={`${padded ? 'pt-8 lg:pt-12' : ''} ${centreHeading ? 'text-center' : 'text-left'}`}>
                    {title && (
                        <>
                            {h1 ? (
                                <h1>
                                    {title}
                                </h1>
                            ) : (
                                
                                <h2>
                                    {title}
                                </h2>
                
                            )}
                        </>
                    )}
                    {subtitle && (
                        <p className='pt-2 lg:pt-4'>
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Title