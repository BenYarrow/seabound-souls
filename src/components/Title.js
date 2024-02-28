import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

const Title = ({
    title, 
    subTitle,
    invert = false,
    h1 = false,
    centreTitle = false,
}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
  
    const mainControls = useAnimation()
  
    useEffect(() => {
      if (isInView) {
        mainControls.start('visible')
      }
    }, [isInView,  mainControls])

    const classes = [
        'prose prose-headings:uppercase prose-headings:text-2xl prose-headings:md:3xl prose-headings:lg:text-4xl prose-headings:xl-text-5xl py-0',
        'max-w-6xl',
        invert ? 'prose-headings:text-white prose-p:text-white' : 'prose-headings:text-blue prose-p:text-blue',
        centreTitle && 'prose-headings:text-center prose-h1:text-center',
    ].join(' ')
    
    return (
        <div className={classes} ref={ref}>
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

                {title && (
                    <>
                        {h1 ? (
                            <h1>
                                {title}
                            </h1>
                        ) : (
                            <>
                                {typeof title === 'string' ? (
                                    <h2>
                                        {title}
                                    </h2>
                                ) : (
                                    title()
                                )}
                            </>
                        )}
                    </>
                )}
                {subTitle && (
                    <p>
                        {subTitle}
                    </p>
                )}
            </motion.div>
        </div>
    )
}

export default Title