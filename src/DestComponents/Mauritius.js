import React from 'react';
import {blogs} from '../Data/Blogs'
import {Link} from 'react-router-dom'

let mauritiusBlogs = blogs.filter(location => location.country === 'mauritius')




const BlogLink = () => {
  return(
    <div className='grid grid-rows-1 md:grid-cols-3 gap-8 px-20 text-turquoise font-standard'>

      {mauritiusBlogs.map(blogLink => {
        return(
          <div >
            {blogLink.blogData.map(data => {
              return(
                <Link to={data.linkTo}>
                  <div className='flex flex-col w-full h-auto items-center  rounded-lg ' >
                    <h2 className='text-xl text-center pb-4'>{data.title}</h2>
                    <img src={data.imgSrc} alt={data.imgAlt} className='' width='100%'/>
                    <p className='pt-6'>{data.blogIntro} <a href={data.linkTo} className='underline'>Read more</a></p>
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
