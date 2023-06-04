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

                    <div id='mauritius-hero-section'>
                      <div className='flex justify-center pt-8'>

                          <h2 className='text-center text-standard text-xxxl'>
                            {content.title}
                          </h2>

                      </div>
                    </div>
                    <div className='bg-turquoise flex justify-center py-4'>
                          <p className='text-center px-20 lg:px-80 py-4 rounded-lg text-standard text-xl'>
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
                    <div className='w-full flex justify-center '>
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
                      </div>
                      <div className='w-full px-20 flex justify-center'>
                        <img src={content.leMorneBeachSrc} alt={content.leMorneBeachAlt} className='rounded-lg w-5/6 ' />
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
                        <div className='w-full px-20 flex justify-center py-8'>
                          <img src={content.safetyBoatSrc} alt={content.safetyBoatAlt} className='rounded-lg w-full ' />
                        </div>
                      </div>
                      <div className='py-8 px-20'>
                        <p className='pb-8 text-xxl text-center'>
                          Other Activities
                        </p>
                        <p>
                          {content.otherActivities}
                        </p>
                      </div>
                      <div className='px-20 '>
                        <p className='pb-8 text-xxl text-center'>Where to stay</p>
                        <p>{content.whereToStay}</p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-8 '>
                          <div className='flex flex-col items-center p-4 rounded-lg  shadow-2xl'>
                            <a href='https://www.luxresorts.com/en/mauritius/hotel/luxlemorne' target='_blank' rel='noreferrer' className='text-xl underline pb-4 text-center'>LUX* Le Morne</a>
                            <img src={content.luxLeMorneImg} alt={content.luxLeMorneImgAlt} className='rounded-lg'/>
                          </div>
                          <div className='flex flex-col items-center p-4 rounded-lg  shadow-2xl'>
                            <a href='https://www.marriott.com/en-us/hotels/mrujw-jw-marriott-mauritius-resort/overview/' target='_blank' rel='noreferrer' className='text-xl underline pb-4 text-center'>JW Marriott Mauritius Resort</a>
                            <img src={content.jwMarriottImg} alt={content.jwMarriottImgAlt} className='rounded-lg'/>
                          </div>
                          <div className='flex flex-col items-center p-4 rounded-lg shadow-2xl'>
                            <a href='https://www.riu.com/en/hotel/mauritius-island/morne-brabant/index.jsp' target='_blank' rel='noreferrer' className='text-xl underline pb-4 text-center'>Hotel RIU Le Morne</a>
                            <img src={content.ruiImgSrc} alt={content.ruiImgAlt} className='rounded-lg w-full'/>
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