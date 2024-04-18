import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import BlockWrapper from './BlockWrapper';
import { checkContentFormat } from '../helpers/functions';

const Text = ({ 
    title, 
    subtitle,
    content = [], 
    invert,
    centredText = false,
    centreHeading = false,
    lineClamp,
    container = true
}) => {
  
  const classes = [
    'prose lg:prose-lg prose-headings:uppercase prose-a:text-orange prose-a:font-bold prose-headings:mt-0 max-w-none prose-h3:text-xl prose-p:pt-0',
    invert ? 'prose-h3:text-white prose-p:text-white prose-a:text-white' : 'prose-headings:text-blue prose-p:text-black prose-a:text-orange',
    centredText && 'prose-p:text-center',
    centreHeading && 'prose-h2:text-center',
  ].filter(Boolean).join(' ');

  const textRef = useRef(null)
  const isTextInView = useInView(textRef, {once: true})
    
  const mainControls = useAnimation()

  useEffect(() => {
    if (isTextInView) {
      mainControls.start('visible')
    }
  }, [isTextInView,  mainControls])

  return (
    <BlockWrapper container={container}>
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
            {title && <h2>{title}</h2>}

            {subtitle && <h4>{subtitle}</h4>}

            {checkContentFormat(content) && content.map((item, index) => (
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
    </BlockWrapper>
  );
};

export default Text;
