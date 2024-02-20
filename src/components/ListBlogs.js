import React from 'react'
import BlockWrapper from './BlockWrapper'
import ButtonLink from  './ButtonLink'
import Title from './Title'
import BlogLink from './BlogLink'
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ListBlogs = ({
  invert,
  title,
  subTitle,
  featuredBlogs,
  buttonLink,
  buttonTitle,
}) => {

  const buttonRef = useRef(null)
  const isInView = useInView(buttonRef, {once: true})

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView,  mainControls])

  return (
    <BlockWrapper invert={invert} padded={true}>
        <Title
          title={title}
          subTitle={subTitle}
          invert={invert}
        />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
            {featuredBlogs.map((blog) => {
              return blog.blogLinkData.map((data, index) => {
                return (
                  <BlogLink {...data} index={index} invert={invert}/>
                );
              });
            })}
          </div>
          <div ref={buttonRef}>
            <motion.div 
              className='w-full py-8 flex justify-center'
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
                <ButtonLink linkTo={buttonLink} title={buttonTitle} colour={invert ? "white-outline" : "blue-outline"}/>
            </motion.div>
          </div>
      </BlockWrapper>
  )
}

export default ListBlogs