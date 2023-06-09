import React from 'react'

const WindsurfingIn = ({content}) => {
  return (
    <div>
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
                        {content.whenToGoTitle}
                      </p>
                      <p className='max-w-5xl text-xl text-center'>
                        {content.whenToGoInfo}
                      </p>
                    </div>
                    <div className='flex justify-center py-8 px-20 md:px-40 hidden lg:flex'>
                      <iframe 
                          width="1120" 
                          height="630" 
                          src={content.embedSrc} 
                          title="YouTube video player" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowfullscreen
                          className='rounded-lg'
                        >
                      </iframe>
                    </div>
                    <div className='py-8 px-20 md:px-40'>
                        <img src={content.windsurfingImgThreeSrc} alt={content.windsurfingImgThreeAlt} className='rounded-lg  lg:hidden' />
                      </div>
                    <div className='py-8 px-20 md:px-40'>
                      <p className='pb-4 text-xxl text-center'>
                        {content.whereToSailTitle}
                      </p>
                      <div className='grid grid-cols-1 lg:grid-cols-3  gap-8'>
                        <div className='flex flex-col items-center p-4 rounded-lg shadow-lg shadow-turquoise/60'>
                          <p className=' pb-4 text-xl font-bold'>
                            {content.spotOneTitle}
                          </p>
                          <p className='text-center'>
                            {content.spotOneInfo}
                          </p>
                        </div>
                        <div className='flex flex-col items-center p-4 rounded-lg shadow-lg shadow-turquoise/60'>
                          <p className='text-center pb-4 text-xl font-bold'>
                            {content.spotTwoTitle}
                          </p>
                          <p className='text-center'>
                            {content.spotTwoInfo}
                          </p>
                        </div>
                        <div className='flex flex-col items-center p-4 rounded-lg shadow-lg shadow-turquoise/60'>
                          <p className='text-center pb-4 text-xl font-bold'>
                            {content.spotThreeTitle}
                          </p>
                          <p className='text-center'>
                            {content.spotThreeInfo}
                          </p>
                        </div>
                        </div>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex justify-center'>
                        <img src={content.jwMarriottImg} alt={content.jwMarriottImgAlt} className='rounded-lg  ' />
                      </div>
                      <div className='py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-xxl text-center'>
                          {content.whatWeDidTitle}
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.whatWeDidInfo}
                        </p>
                      </div>
                      
                      <div className='w-full px-20 md:px-40 grid grid-cols-1 lg:grid-cols-2 gap-8 center'>
                          <img src={content.windsurfingImgTwoSrc} alt={content.windsurfingImgTwoAlt} className='rounded-lg' />
                          <img src={content.windsurfingImgThreeSrc} alt={content.windsurfingImgThreeAlt} className='rounded-lg hidden lg:flex' />
                        </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-8 text-xxl text-center'>
                          {content.rentalTitle}
                        </p>  
                        <p className='pb-8 max-w-5xl text-xl text-center'>
                          {content.rentalInfoOne}
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.rentalInfoTwo}
                        </p>
                      </div>
                      <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-8 text-xxl text-center'>
                          {content.safetyTitle}
                        </p>
                        <p className='pb-8 max-w-5xl text-xl text-center'>
                          {content.safetyInfo}
                        </p>
                        <div className='w-full  flex justify-center py-8'>
                          <img src={content.safetyImgSrc} alt={content.safetyImgAlt} className='rounded-lg w-full ' />
                        </div>
                      </div>
                      <div className='py-8 px-20 md:px-40 flex flex-col items-center'>
                        <p className='pb-8 text-xxl text-center'>
                          {content.otherActivitiesTitle}
                        </p>
                        <p className='pb-8 max-w-5xl text-xl text-center'>
                          {content.otherActivitiesInfo}
                        </p>
                      </div>
                      <div className='px-20 md:px-40 py-8'>
                        <div className='flex flex-col items-center'>
                          <p className='pb-8 text-xxl text-center'>{content.whereToStayTitle}</p>
                          <p className='pb-8 max-w-5xl text-xl text-center'>{content.whereToStayInfo}</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-8 '>
                          <div className='flex flex-col items-center p-4 rounded-lg  shadow-2xl shadow-turquoise/60 cursor-pointer hover:bg-turquoise/60 hover:text-standard duration-200 ease-out hover:ease-in'>
                            <a href='https://www.luxresorts.com/en/mauritius/hotel/luxlemorne' target='_blank' rel='noreferrer' className='text-xl underline pb-4 text-center'>
                              <p className='text-center pb-4'>LUX* Le Morne</p>
                              <img src={content.accomodationOneImgSrc} alt={content.accomodationOneImgAlt} className='rounded-lg'/>
                            </a>
                            
                          </div>
                          <div className='flex flex-col items-center p-4 rounded-lg  shadow-2xl shadow-turquoise/60 cursor-pointer hover:bg-turquoise/60 hover:text-standard duration-200 ease-out hover:ease-in'>
                            <a href='https://www.marriott.com/en-us/hotels/mrujw-jw-marriott-mauritius-resort/overview/' target='_blank' rel='noreferrer' className='text-xl'>
                              <p className='text-center pb-4'>JW Marriott Mauritius Resort</p>
                              <img src={content.accomodationTwoImgSrc} alt={content.accomodationTwoImgAlt} className='rounded-lg'/>
                            </a>
                          </div>
                          <div className='flex flex-col items-center p-4 rounded-lg shadow-2xl shadow-turquoise/60 cursor-pointer hover:bg-turquoise/60 hover:text-standard duration-200 ease-out hover:ease-in'>
                            <a href='https://www.riu.com/en/hotel/mauritius-island/morne-brabant/index.jsp' target='_blank' rel='noreferrer' className='text-xl '>
                              <p className='text-center pb-4'>Hotel RIU Le Morne</p>
                              <img src={content.accomodationThreeImgSrc} alt={content.accomodationThreeImgAlt} className='rounded-lg'/>  
                            </a>
                            
                          </div>
                        </div>
                      </div>
                      <div className='px-20 md:px-40 py-8 flex justify-center'>
                        <p className='pb-8 max-w-5xl text-xl text-center'>{content.outro}</p>
                      </div>
                    </div>
                </div>
          </div>
  )
}

export default WindsurfingIn