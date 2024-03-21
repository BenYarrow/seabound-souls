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
      <Link ref={ref} to={linkTo} aria-label={`Read about our time in ${location}`} className='group' >
        <motion.div 
          className="w-full overflow-hidden prose prose-h3:text-blue prose-p:text-blue max-w-none"
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
          <img src={blogImageSrc}
            width="480"
            height="480"
            alt={location}
            className="aspect-[5/4] w-full group-hover:scale-105 transition duration-300 object-cover"
            loading="lazy"
            crossOrigin="true"
          />
          
          <Text 
            title={location}
            content={[blogIntro]}
            invert={invert}
            lineClamp="line-clamp-4"
          />
        </motion.div>
      </Link>
    )
}


export default BlogLink