import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { defaultProseClasses } from  "../helpers/functions"

interface BlogLinkProps {
  linkTo: string
  location: string
  blogIntro: string
  blogLinkImgSrc: string
  invert?: boolean
}

const BlogLink = ({
    linkTo,
    location,
    blogIntro,
    blogLinkImgSrc,
    invert = false
   }: BlogLinkProps) => {

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
      <Link ref={ref} to={linkTo} aria-label={`Read about our time in ${location}`} className='group'>
        <motion.div 
          className=""
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
            crossOrigin="anonymous"
          />
          <div className="pt-12">
            <div className={`"pt-8 ${defaultProseClasses(invert)}`}>
              <h2>{location}</h2>
              <p>
                {blogIntro}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    )
}


export default BlogLink