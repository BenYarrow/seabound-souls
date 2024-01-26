import React from 'react'
import BlockWrapper from './BlockWrapper'
import ButtonLink from  './ButtonLink'
import Title from './Title'
import BlogLink from './BlogLink'

const ListBlogs = ({
  invert,
  title,
  subTitle,
  featuredBlogs,
  buttonLink,
  buttonTitle,
}) => {
  return (
    <BlockWrapper invert={invert}>
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
          <div className='w-full pt-8 flex justify-center'>
              <ButtonLink linkTo={buttonLink} title={buttonTitle} colourClass={invert ? "white-outline" : "blue-outline"}/>
          </div>
      </BlockWrapper>
  )
}

export default ListBlogs