import React from 'react'

import {blogs} from '../Data/Blogs'
import '../Css/Windsurfing-In-Mauritius.css';


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
                    <div id='mauritius-windsurfing-hero-section'>
                      <div className='flex justify-center pt-20'>
                          <h2 className='text-center text-standard text-xxxl'>
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
                        When to go?
                      </p>
                      <p className='max-w-5xl text-xl text-center'>
                        {content.whenToGo}
                      </p>
                    </div>
                    <div className='flex justify-center py-8 px-20 md:px-40 hidden lg:flex'>
                      <iframe 
                          width="1120" 
                          height="630" 
                          src="https://www.youtube.com/embed/IayVRvBMF_Q" 
                          title="YouTube video player" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowfullscreen
                          className='rounded-lg'
                        >
                      </iframe>
                    </div>
                    <div className='py-8 px-20 md:px-40'>
                        <img src={content.benWindsurfingOneSrc} alt={content.benWindsurfingOneAlt} className='rounded-lg  lg:hidden' />
                      </div>
                    <div className='py-8 px-20 md:px-40'>
                      <p className='pb-4 text-xxl text-center'>
                        Where to sail?
                      </p>
                      <div className='grid grid-cols-1 lg:grid-cols-3  gap-8'>
                        <div className='flex flex-col items-center p-4 rounded-lg shadow-lg shadow-turquoise/60'>
                          <p className=' pb-4 text-xl font-bold'>
                            Le Morne
                          </p>
                          <p className='text-center'>
                            {content.leMorne}
                          </p>
                        </div>
                        <div className='flex flex-col items-center p-4 rounded-lg shadow-lg shadow-turquoise/60'>
                          <p className='text-center pb-4 text-xl font-bold'>
                            Anse La Raie
                          </p>
                          <p className='text-center'>
                            {content.anseLaRaie}
                          </p>
                        </div>
                        <div className='flex flex-col items-center p-4 rounded-lg shadow-lg shadow-turquoise/60'>
                          <p className='text-center pb-4 text-xl font-bold'>
                            Belle Mare
                          </p>
                          <p className='text-center'>
                            {content.belleMare}
                          </p>
                        </div>
                        </div>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex justify-center'>
                        <img src={content.jwMarriottImg} alt={content.jwMarriottImgAlt} className='rounded-lg  ' />
                      </div>
                      <div className='py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl text-center'>
                          Our experience at Le Morne
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.whatWeDid}
                        </p>
                      </div>
                      
                      <div className='w-full px-20 md:px-40 grid grid-cols-1 lg:grid-cols-2 gap-8 center'>
                          <img src={content.rachelWindsurfingOneSrc} alt={content.rachelWindsurfingOneAlt} className='rounded-lg' />
                          <img src={content.benWindsurfingOneSrc} alt={content.benWindsurfingOneAlt} className='rounded-lg hidden lg:flex' />
                        </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-8 text-xxl text-center'>
                          Equipment Rental
                        </p>  
                        <p className='pb-8 max-w-5xl text-xl text-center'>
                          {content.rentalIntro}
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          Le Morne is particularly well known for its windsurfing school that caters to all levels. We hired kit from <a href='https://www.ion-club.net/le-morne/' className='underline'>Ion club, Le Morne</a> and were very impressed with their selection of boards and sails. Staff were super friendly and always on hand to help. They also cater for kite surfers and surfers.
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-8 text-xxl text-center'>
                          Safety and Local Regulations
                        </p>
                        <p className='pb-8 max-w-5xl text-xl text-center'>
                          {content.safety}
                        </p>
                        <div className='w-full  flex justify-center py-8'>
                          <img src={content.safetyBoatSrc} alt={content.safetyBoatAlt} className='rounded-lg w-full ' />
                        </div>
                      </div>
                      <div className='py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-8 text-xxl text-center'>
                          Other Activities
                        </p>
                        <p className='pb-8 max-w-5xl text-xl text-center'>
                          {content.otherActivities}
                        </p>
                      </div>
                      <div className='px-20 md:px-40 py-8'>
                        <div className='flex flex-col items-center'>
                          <p className='pb-8 text-xxl text-center'>Where to stay</p>
                          <p className='pb-8 max-w-5xl text-xl text-center'>{content.whereToStay}</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-8 '>
                          <div className='flex flex-col items-center p-4 rounded-lg  shadow-2xl shadow-turquoise/60 cursor-pointer hover:bg-turquoise/60 hover:text-standard duration-200 ease-out hover:ease-in'>
                            <a href='https://www.luxresorts.com/en/mauritius/hotel/luxlemorne' target='_blank' rel='noreferrer' className='text-xl underline pb-4 text-center'>
                              <p className='text-center pb-4'>LUX* Le Morne</p>
                              <img src={content.luxLeMorneImg} alt={content.luxLeMorneImgAlt} className='rounded-lg'/>
                            </a>
                            
                          </div>
                          <div className='flex flex-col items-center p-4 rounded-lg  shadow-2xl shadow-turquoise/60 cursor-pointer hover:bg-turquoise/60 hover:text-standard duration-200 ease-out hover:ease-in'>
                            <a href='https://www.marriott.com/en-us/hotels/mrujw-jw-marriott-mauritius-resort/overview/' target='_blank' rel='noreferrer' className='text-xl'>
                              <p className='text-center pb-4'>JW Marriott Mauritius Resort</p>
                              <img src={content.jwMarriottImg} alt={content.jwMarriottImgAlt} className='rounded-lg'/>
                            </a>
                          </div>
                          <div className='flex flex-col items-center p-4 rounded-lg shadow-2xl shadow-turquoise/60 cursor-pointer hover:bg-turquoise/60 hover:text-standard duration-200 ease-out hover:ease-in'>
                            <a href='https://www.riu.com/en/hotel/mauritius-island/morne-brabant/index.jsp' target='_blank' rel='noreferrer' className='text-xl '>
                              <p className='text-center pb-4'>Hotel RIU Le Morne</p>
                              <img src={content.ruiImgSrc} alt={content.ruiImgAlt} className='rounded-lg'/>  
                            </a>
                            
                          </div>
                        </div>
                      </div>
                      <div className='px-20 md:px-40 py-8 flex justify-center'>
                        <p className='pb-8 max-w-5xl text-xl text-center'>{content.outro}</p>
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