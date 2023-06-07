import React from 'react'
import {blogs} from '../Data/Blogs'

let thingsToDoInMauririuts = blogs.filter(blog => blog.blogTitle === 'things to do')

const ThingsToDoInMauritius = () => {
  return (
    <div>
      {thingsToDoInMauririuts.map(blog => {
        return(
          <div>
            {blog.blogData.map(content => {
              return (
                <div>
                  <div className='w-full h-auto text-turquoise font-standard text-base '>
                    <div id='mauritius-to-do-hero-section'>
                      <div className='flex justify-center '>
                          <h2 className='text-center text-turquoise text-xxxl'>
                            {content.title}
                          </h2>
                        </div>
                      </div>
                      <div className='bg-turquoise flex justify-center py-4 px-20 '>
                        <p className='text-center max-w-5xl py-4 rounded-lg text-standard text-xl'>
                          {content.blogIntro}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl'>
                          Head to the beach
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.headToTheBeach}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl'>
                          Take a boat trip
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.takeABoatTrip}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl'>
                          See The Seven Colour Earth
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.sevenColouredEarth}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl'>
                          Explore a waterfall
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.exploreAWaterfall}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl'>
                          Take a rum tour
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.takeARumTour}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl'>
                          Explore nature
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.exploreNature}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl'>
                          Take a hike
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.takeAHike}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl'>
                          Learn about the history and culture
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.learnAboutMauritius}
                        </p>
                      </div>




                      
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

export default ThingsToDoInMauritius