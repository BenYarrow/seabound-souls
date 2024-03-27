import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

const Text = ({ 
    title, 
    subtitle,
    content = [], 
    invert,
    centredText = false,
    centreHeading = false,
    lineClamp
}) => {
  
  const classes = [
    'prose lg:prose-lg prose-headings:uppercase prose-a:text-blue prose-a:font-bold prose-headings:mt-0 max-w-none prose-h3:text-xl',
    invert ? 'prose-h3:text-white prose-p:text-white prose-a:text-white' : 'prose-headings:text-blue prose-p:text-blue prose-a:text-blue',
    centredText && 'prose-p:text-center',
    centreHeading && 'prose-h2:text-center'
  ].join(' ');

  const textRef = useRef(null)
  const isTextInView = useInView(textRef, {once: true})
    
  const mainControls = useAnimation()

  useEffect(() => {
    if (isTextInView) {
      mainControls.start('visible')
    }
  }, [isTextInView,  mainControls])

  return (
    <>
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
          <div className={classes}>
            {title && <h3>{title}</h3>}

            {subtitle && <h4>{subtitle}</h4>}

            {content.length > 0 && content.map((item, index) => (
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
    </>
  );
};

export default Text;
