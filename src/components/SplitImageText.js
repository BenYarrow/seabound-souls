import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import Text from '../components/Text'
import BlockWrapper from './BlockWrapper';

const SplitImageText = ({
    reverse = false, 
    image, 
    imageDescription = 'Seabound Souls', 
    imageLink = 'https://www.instagram.com/seabound.souls/', 
    title, 
    texts = []
}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
  
    const mainControls = useAnimation()
  
    useEffect(() => {
      if (isInView) {
        mainControls.start('visible')
      }
    }, [isInView,  mainControls])

    const imageLinkWrapperClasses = 'group-hover:bg-white/60 absolute inset-0 flex items-center justify-center transition duration-300';

    return (
        <BlockWrapper >
            <div className={`${image ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'grid grid-cols-1'}  lg:gap-12`}
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
                {image && (
                    <div className={`${reverse ? 'order-last' : 'order-first'} relative group w-full h-80 lg:h-96 bg-center bg-cover overflow-hidden`} ref={ref}>
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
                            <img src={image}
                                width="400"
                                height="400"
                                alt=""
                                className='w-full h-full bg-center bg-cover group-hover:scale-105 transition duration-300'
                            />
                            <a href={imageLink} target="_blank" rel="noreferrer" className={imageLinkWrapperClasses}>
                                <p className="text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                                    {imageDescription}
                                </p>
                            </a>
                        </motion.div>
                    </div>
                )}

                <Text
                    title={title}
                    content={texts}
                />
            </div>
        </BlockWrapper>
    );
};

export default SplitImageText;
