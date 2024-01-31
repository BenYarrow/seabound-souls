import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

const Text = ({ 
    title, 
    subTitle,
    content = [], 
    invert,
    centredText = false,
    largeHeading,
    centreHeading = false
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
            {title && <h2>{title}</h2>}

            {subTitle && <h3>{subTitle}</h3>}

              {content.map((item, index) => (
                <p key={index}>
                  {typeof item === 'string' || 'array' ? (
                    item
                  ) : (
                    item()
                  )}
                </p>
              ))}
            </motion.div>
          </div>
        )}
    </>
  );
};

export default Text;
