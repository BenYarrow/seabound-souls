import React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SplitText = (props) => {

    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const isInView = useInView(leftRef, {once: true})
  
    const mainControls = useAnimation()
  
    useEffect(() => {
      if (isInView) {
        mainControls.start('visible')
      }
    }, [isInView, mainControls])

    return(
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
            <div className="bg-blue py-12 lg:pl-40 pr-12" ref={leftRef} >
                <motion.p 
                    className="text-white "                 
                    variants={{
                        hidden: {opacity: 0, x: -75},
                        visible: {opacity: 1, x: 0},
                      }}
                      initial= 'hidden'
                      animate={mainControls}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                      }}
                >
                    {props.leftText}
                </motion.p>
            </div>
            <div className="bg-white py-12 lg:pr-40 pl-12" ref={rightRef}>
                <motion.p 
                    className="  "                 
                    variants={{
                        hidden: {opacity: 0, x: 75},
                        visible: {opacity: 1, x: 0},
                      }}
                      initial= 'hidden'
                      animate={mainControls}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                      }}
                >
                    {props.rightText}
                </motion.p>
            </div>
        </div>
    )
}

export default SplitText