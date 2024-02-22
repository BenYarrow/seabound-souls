import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

const Text = ({ 
    title, 
    subTitle,
    content = [], 
    invert,
    centredText = false,
    largeHeading,
    centreHeading = false,
    children
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
    'prose prose-headings:uppercase prose-a:text-blue prose-a:font-bold prose-headings:mt-0 max-w-6xl',
    largeHeading && 'prose-h2:text-4xl',
    invert ? 'prose-headings:text-white prose-p:text-white prose-a:text-white' : 'prose-headings:text-blue prose-p:text-blue prose-a:text-blue',
    centredText && 'prose-p:text-center',
    centreHeading && 'prose-h2:text-center'
  ].join(' ');

  return (
    <>
      {content.length > 0 && (
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
            {title && <h3>{title}</h3>}

            {subTitle && <p>{subTitle}</p>}

            {content.map((item, index) => (
                <div key={index}>
                  {typeof item === 'string' || Array.isArray(item) ? (
                    <p>{item}</p>
                  ) : typeof item === 'function' ? (
                    item() // Assuming item is a function that returns JSX
                  ) : (
                    null // Handle other types or do nothing
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        )}
    </>
  );
};

export default Text;
