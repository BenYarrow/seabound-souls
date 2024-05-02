import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { defaultProseClasses } from  "../helpers/functions"

interface BlogLinkProps {
  linkTo: string
  title: string
  blogIntro: string
  blogLinkImgSrc: string
  invert?: boolean
}

const BlogLink = ({
    linkTo,
    title,
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
      <Link ref={ref} to={linkTo} className='group'>
        <motion.div 
          className="space-y-8"
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
          <div className="overflow-hidden">
            <img src={blogImageSrc}
              width="480"
              height="480"
              alt={title}
              className="w-full aspect-square object-cover mb-8 hover:scale-105 transition duration-300"
              loading="lazy"
              crossOrigin="anonymous"
            />
          </div>
            <div className={defaultProseClasses({invert, lineClamp: true})}>
              <h2>{title}</h2>
              <p className="line-clamp-4">
                {blogIntro}
              </p>
            </div>
        </motion.div>
      </Link>
    )
}


export default BlogLink