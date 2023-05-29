import React from 'react'
import {blogs} from '../Data/Blogs'


let windsurfingInMauritius = blogs.filter(blog => blog.blogTitle === 'windsurfing in mauritius')


const WindsurfingInMauritius = () => {
  return (
    <div>
      {windsurfingInMauritius.map(blog => {
        return(
          <div>
            {blog.blogData.map(content => {
              return(
                <div>
                  <div className='w-full h-auto text-turquoise font-standard text-base '>
                    <div className='py-8'>
                      <h2 className='text-center text-xl md:text-xxl'>
                          {content.title}
                      </h2>
                    </div>
                    <div className='bg-turquoise text-standard text-xl px-20 py-8'>
                      <p className=''>
                        {content.blogIntro}
                      </p>
                    </div>
                    <div className='w-full py-8 px-20'>
                      <p className='pb-4 text-xxl text-center'>
                        When to go?
                      </p>
                      <p>
                        {content.whenToGo}
                      </p>
                    </div>
                      <div className='py-8'>
                        <p className='pb-4 text-xxl text-center'>
                          Where to sail?
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-3 px-20 gap-8'>
                          <div className='flex flex-col'>
                            <p className='text-center pb-4 text-xl'>
                              Le Morne
                            </p>
                            <p>
                              {content.leMorne}
                            </p>
                          </div>
                          <div>
                            <p className='text-center  pb-4 text-xl'>
                              Anse La Raie
                            </p>
                            <p>
                              {content.anseLaRaie}
                            </p>
                          </div>
                          <div>
                            <p className='text-center pb-4 text-xl'>
                              Belle Mare
                            </p>
                            <p>
                              {content.belleMare}
                            </p>
                          </div>
                        </div>
                        <div className='py-8 px-20'>
                          <p className='pb-4 text-xxl text-center'>
                            Our experience at Le Morne
                          </p>
                          <p>
                            {content.whatWeDid}
                          </p>
                        </div>
                        <div className='py-8 px-20'>
                          <p className='pb-8 text-xxl text-center'>
                            Equipment Rental
                          </p>  
                          <p className='pb-4'>
                            {content.rentalIntro}
                          </p>
                          <p>
                            Le Morne is particularly well known for its windsurfing school that caters to all levels. We hired kit from <a href='https://www.ion-club.net/le-morne/' className='underline'>Ion club, Le Morne</a> and were very impressed with their selection of boards and sails. Staff were super friendly and always on hand to help. They also cater for kite surfers and surfers.
                          </p>
                        </div>
                        <div className='py-8 px-20'>
                          <p className='pb-8 text-xxl text-center'>
                            Safety and Local Regulations
                          </p>
                          <p>
                            {content.safety}
                          </p>
                        </div>
                        <div className='py-8 px-20'>
                          <p className='pb-8 text-xxl text-center'>
                            Other Activities
                          </p>
                          <p>
                            {content.otherActivities}
                          </p>
                        </div>
                      </div>
                      <div className='px-20'>
                        <p className='pb-8 text-xxl text-center'>Where to stay</p>
                        <p>{content.whereToStay}</p>
                        <div className='grid grid-cols-1 md:grid-cols-3 py-8'>
                          <div className='flex flex-col items-center'>
                            <a href='https://www.luxresorts.com/en/mauritius/hotel/luxlemorne' className='text-xl underline'>LUX* Le Morne</a>
                          </div>
                          <div className='flex flex-col items-center'>
                            <a href='https://www.marriott.com/en-us/hotels/mrujw-jw-marriott-mauritius-resort/overview/' className='text-xl underline'>JW Marriott Mauritius Resort</a>
                          </div>
                          <div className='flex flex-col items-center'>
                            <a href='https://www.riu.com/en/hotel/mauritius-island/morne-brabant/index.jsp' className='text-xl underline'>Hotel RIU Le Morne</a>
                          </div>
                        </div>
                      </div>
                      <div className='px-20 py-8'>
                        <p>{content.outro}</p>
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

export default WindsurfingInMauritius