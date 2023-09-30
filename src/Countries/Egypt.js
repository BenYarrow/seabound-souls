import React from 'react';
import {blogs} from '../Data/Blogs'
import {Link} from 'react-router-dom'

let egyptBlogs = blogs.filter(location => location.country === 'egypt')



const BlogLink = () => {
  return(
    <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20   mb-8'>

      {egyptBlogs.map(blogLink => {
        return(
          <div className='shadow-2xl shadow-blue/60 p-4   hover:bg-blue/60 hover:text-standard duration-200 ease-out hover:ease-in'>
            {blogLink.blogLinkData.map(data => {
              return(
                <Link to={data.linkTo}>
                  <div className='flex flex-col w-full h-auto  ' >
                    <h2 className='text-xl text-center pb-4 font-bold'>{data.title}</h2>
                    <img src={data.blogLinkImgSrc} alt={data.blogLinkImgAlt} className='' width='100%'/>
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
    <div className=' pb-8 '>
      <div className='py-8'>
        <h1 className='xl:text-8xl text-6xl py-8  text-center '>Egypt</h1>
        <p className='text-xl /80 text-center'>Dahab</p>
      </div>
      <div>
        <BlogLink />
      </div>
    </div>
        
  )
}

export default Egypt
