import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import { checkContentFormat, defaultProseClasses } from '../helpers/functions';

const Text = ({ 
    title, 
    subtitle,
    content = [], 
    invert,
    centredText = false,
    centreHeading = false,
    lineClamp,
}) => {
  

  const textRef = useRef(null)
  const isTextInView = useInView(textRef, {once: true})
    
  const mainControls = useAnimation()

  useEffect(() => {
    if (isTextInView) {
      mainControls.start('visible')
    }
  }, [isTextInView,  mainControls])
  const blockContent = checkContentFormat(content) 

  return (
        <motion.div ref={textRef}  
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
          <div className={defaultProseClasses({ invert, centredText, centreHeading })}>
            {title && <h2>{title}</h2>}

            {subtitle && <h3>{subtitle}</h3>}

            {blockContent && blockContent.map((item, index) => (
                <div key={index}>
                  {typeof item === 'string' || Array.isArray(item) ? (
                    <p className={lineClamp ? lineClamp : ''}>{item}</p>
                  ) : typeof item === 'function' ? (
                    item()
                  ) : (
                    null
                  )}
                </div>
              ))}
          </div>
      </motion.div>
  );
};

export default Text;
