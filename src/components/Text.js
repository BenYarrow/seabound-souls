import React, {useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

const Text = ({ 
    title, 
    content = [], 
    invert,
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
    'prose prose-h3:uppercase prose-a:text-blue prose-a:font-bold prose-h3:mt-0',
    invert ? 'prose-h3:text-white prose-p:text-white prose-a:text-white' : 'prose-h3:text-blue prose-p:text-blue prose-a:text-blue',
    'max-w-6xl',
  ].join(' ');

  return (
    <div className={classes} ref={ref}>
      {content.length > 0 && (
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
      )}
    </div>
  );
};

export default Text;
