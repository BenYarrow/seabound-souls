import React from 'react';
import {blogLinks} from '../Data/Blogs'
import {Link} from 'react-router-dom'

let mauritiusBlogs = blogLinks.filter(location => location.country === 'mauritius')




const BlogLink = () => {
  return(
    <div className='grid grid-rows-1 md:grid-cols-3 gap-8 px-20 text-standard font-standard'>

      {mauritiusBlogs.map(blogLink => {
        return(
          <div >
            {blogLink.blogData.map(data => {
              return(
                <Link to={data.linkTo}>
                  <div className='flex flex-col w-full h-auto items-center bg-turquoise rounded-lg p-4' >
                    <h2 className='py-4 text-xl'>{data.blogTitle}</h2>
                    <img src={data.imgSrc} alt={data.imgAlt} className='py-4' width='100%'/>
                    <p >{data.blogIntro} <a href={data.linkTo} className='underline'>Read more</a></p>
                  </div>
                </Link>
              )
            })}
          </div>
        )
      })}  
    </div>
  )
}


function Mauritius() {
  return (
    <div className='font-standard pb-8 '>
      <div className='py-8'>
        <h1 className='lg:text-[5rem] text-xxl text-turquoise text-center'>Mauritius</h1>
      </div>
      <div>
        <BlogLink />
      </div>
    </div>
        
  )
}

export default Mauritius
