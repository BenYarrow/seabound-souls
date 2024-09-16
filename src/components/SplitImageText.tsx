import React, { ReactNode, useRef, useEffect } from 'react';
import Text from './Text'
import BlockWrapper from './BlockWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation, useInView } from "framer-motion";
import Title from './Title';

interface SplitImageTextProps {
    reverse?: boolean
    invert?: boolean
    image: {
        src: string
        alt?: string
    }
    imageDescription?: string
    imageLink?: string
    title?: string
    content: string | string[] | ReactNode
}

const SplitImageText = ({
    reverse = false, 
    invert = false,
    image, 
    imageDescription = 'Seabound Souls', 
    imageLink = 'https://www.instagram.com/seabound.souls/', 
    title,
    content
}: SplitImageTextProps) => {

    const imageLinkWrapperClasses = 'absolute top-0 w-full flex items-end justify-start group-hover:underline transition duration-300'

    const textRef = useRef(null)
    const textIsInView = useInView(textRef, {once: true})
    const imageRef = useRef(null)
    const imageIsInView = useInView(imageRef, {once: true})
    const titleRef = useRef(null)
    const titleIsInView = useInView(titleRef, {once: true})
  
    const textControls = useAnimation()
    const imageControls = useAnimation()
    const titleControls = useAnimation()
  
    useEffect(() => {
      if (textIsInView) {
        textControls.start('visible')
      }
      if (imageIsInView) {
        imageControls.start('visible')
      }
      if (titleIsInView) {
        titleControls.start('visible')
      }
    }, [textIsInView,  textControls, imageIsInView, imageControls, titleIsInView, titleControls])

    const textVariants = {
        hidden: {opacity: 0, x: reverse ? 75 : -75},
        visible: {opacity: 1, x: 0},
    }

    const imageVariants = {
        hidden: {opacity: 0, x: reverse ? -75 : 75},
        visible: {opacity: 1, x: 0}
    }

    const titleVariants = {
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
    }
    
    return (
        <>
            {content && image && (
                <BlockWrapper invert={invert}>
                    {title && (
                        <motion.div
                            variants={titleVariants}
                            initial= 'hidden'
                            animate={titleControls}
                            transition={{
                                duration: 0.5,
                                delay: 0.5
                            }}
                        >
                            <div ref={titleRef}>
                                <Title
                                    title={title}
                                    invert={invert}
                                />
                            </div>
                        </motion.div>
                    )}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                        <motion.div
                            className={reverse && 'order-last'}
                            variants={textVariants}
                            initial= 'hidden'
                            animate={textControls}
                            transition={{
                                duration: 0.5,
                                delay: 0.5
                            }}
                        >
                            <div ref={textRef}>
                                <Text
                                    content={content}
                                    invert={invert}
                                />
                            </div>
                        </motion.div>
                        
                        <motion.div
                            variants={imageVariants}
                            initial= 'hidden'
                            animate={imageControls}
                            transition={{
                                duration: 0.5,
                                delay: 0.5
                            }}
                        >
                            <div ref={imageRef}>
                                <div className="relative group w-full h-full overflow-hidden">
                                    <img src={image.src}
                                        width="400"
                                        height="400"
                                        alt={image.alt ?? null}
                                        className='w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-300'
                                    />
                                    {imageDescription && imageLink && (
                                        <a href={imageLink} target="_blank" rel="nofollow external noopener noreferrer" className={imageLinkWrapperClasses}>
                                            <p className="bg-white/80 hover:bg-white-darker/80 transition duration-300 z-10 w-full p-4 flex justify-between items-center text-sm">
                                                {imageDescription}
                                                <FontAwesomeIcon icon={faExternalLink}/>
                                            </p>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </BlockWrapper>
            )}
        </>
    );
};

export default SplitImageText;
