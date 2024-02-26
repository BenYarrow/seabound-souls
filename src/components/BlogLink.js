import React from "react";
import { Link } from "react-router-dom";
import Text from "../components/Text.js"
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const BlogLink = ({
    linkTo,
    location,
    blogIntro,
    blogLinkImgSrc,
    index,
    invert
   }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
  
    const mainControls = useAnimation()
  
    useEffect(() => {
      if (isInView) {
        mainControls.start('visible')
      }
    }, [isInView,  mainControls])

    const fallbackImage = '/Logo/logo.png'

    const blogImageSrc = blogLinkImgSrc ? blogLinkImgSrc : fallbackImage
    
    return(
          <li key={index}>
              <Link ref={ref} to={linkTo} aria-label={`Read about our time in ${location}`} className='group' >
                <motion.div 
                  className="flex flex-col justify-between space-y-2 w-full overflow-hidden prose prose-h3:text-blue prose-p:text-blue"
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
                  <div className="overflow-hidden relative">
                    <img src={blogImageSrc}
                      width="480"
                      height="480"
                      alt={`An image of ${location}`}
                      className="aspect-[5/4] group-hover:scale-105 transition duration-300"
                      loading="lazy"
                      crossOrigin="true"
                    />
                  </div>

                  
                  <Text 
                    title={location}
                    content={[blogIntro]}
                    invert={invert}
                  />
                </motion.div>
              </Link>
          </li>
            
        
    )
}


export default BlogLink