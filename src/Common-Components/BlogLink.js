import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const BlogLink = ({
    linkTo,
    title,
    blogLinkImgSrc,
  }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
  
    const mainControls = useAnimation()
  
    useEffect(() => {
      if (isInView) {
        mainControls.start('visible')
      }
    }, [isInView,  mainControls])

    return(
            <Link ref={ref} to={linkTo}>
                <motion.div 
                    className="flex flex-col justify-between h-full space-y-4 w-80 aspect-square overflow-hidden border-b border-blue/20"
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0},
                      }}
                      initial= 'hidden'
                      animate={mainControls}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                      }}
                >
                    <div 
                        className={blogLinkImgSrc ? 'w-full aspect-square hover:scale-105 transition duration-300' : 'w-full aspect-square bg-blue'}
                        style={{
                            backgroundImage: `url(${blogLinkImgSrc})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                    }}>
                    </div>
                      <h3 className="text-xl font-standard uppercase text-black pb-2">
                          {title}
                      </h3>
                </motion.div>
            </Link>
        
    )
}

export default BlogLink