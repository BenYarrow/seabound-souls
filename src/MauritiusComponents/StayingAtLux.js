import React from 'react'
import '../Css/StayingAtLux.css'
import {blogs} from '../Data/Blogs'



let stayingAtLux = blogs.filter(blog => blog.blogTitle === 'staying at lux le morne')

const StayingAtLux = () => {
  return (
    <div>
        {stayingAtLux.map(blog => {
            return(
                <div>
                    {blog.blogData.map(content => {
                        return(
                            <div className='text-blue'>
                                    <div id='lux-hero-section' className='w-full h-screen flex items-center justify-center'>
                                        <div className=' bg-standard/90 p-8 rounded-full flex flex-col justify-center items-center '>
                                            <p className='text-xl'>Staying at</p>
                                            <h2 className='text-blue text-4xl'>
                                                {content.title}
                                            </h2>
                                        </div>         
                                    </div>
                                    <div className='bg-blue flex justify-center py-4 px-20 '>
                                        <p className='text-center max-w-5xl py-4 rounded-lg text-standard text-xl'>
                                            {content.blogIntro}
                                        </p>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default StayingAtLux