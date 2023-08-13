import React from 'react';
import {blogs} from '../Data/Blogs'
import {Link} from 'react-router-dom'

let egyptBlogs = blogs.filter(location => location.country === 'egypt')




const BlogLink = () => {
  return(
    <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 text-blue font-standard mb-8'>

      {egyptBlogs.map(blogLink => {
        return(
          <div className='shadow-2xl shadow-blue/60 p-4 rounded-lg  hover:bg-blue/60 hover:text-standard duration-200 ease-out hover:ease-in'>
            {blogLink.blogData.map(data => {
              return(
                <Link to={data.linkTo}>
                  <div className='flex flex-col w-full h-auto rounded-lg ' >
                    <h2 className='text-xl text-center pb-4 font-bold'>{data.title}</h2>
                    <img src={data.blogLinkImgSrc} alt={data.blogLinkImgAlt} className='rounded-lg' width='100%'/>
                    <p className='pt-6 text-base text-center'>{data.blogIntro} <a href={data.linkTo} className='underline'>Read more</a></p>
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


function Egypt() {
  return (
    <div className='font-standard pb-8 '>
      <div className='py-8'>
        <h1 className='xl:text-8xl text-6xl py-8 text-blue text-center '>Egypt</h1>
        <p className='text-xl text-blue/80 text-center'>Dahab</p>
      </div>
      <div>
        <BlogLink />
      </div>
    </div>
        
  )
}

export default Egypt
