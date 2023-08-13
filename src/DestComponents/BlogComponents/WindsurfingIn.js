import React from 'react'

const WindsurfingIn = ({content}) => {
  return (
    <div>
                <div>
                  <div className='w-full h-auto text-blue font-standard text-base '>
                  <div className='aspect-square rounded-lg' style={{
                    backgroundImage: `url(${content.heroImgSrc})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: `calc(100vh - 8rem)`,
                    width: `100vw`,
                  }}>
                      <div className='w-full h-40 bg-standard/20 flex justify-center items-center '>
                          <h2 className='text-standard text-4xl'>
                            {content.title}
                          </h2>
                      </div>
                    </div>
                    <div className='bg-blue flex justify-center p-8 '>
                          <p className='text-center max-w-5xl py-4 rounded-lg text-standard text-xl'>
                            {content.blogIntro}
                          </p>
                    </div>
                    <div className='w-full p-8  md:px-40 flex flex-col items-center'>
                      <p className='pb-4 text-3xl'>
                        {content.whenToGoTitle}
                      </p>
                      <p className='max-w-5xl text-xl text-center'>
                        {content.whenToGoInfo}
                      </p>
                    </div>
                    <div className=' justify-center py-8 px-20 md:px-40 hidden lg:flex'>
                      <iframe 
                          width="1120" 
                          height="630" 
                          src={content.embedSrc} 
                          title="YouTube video player" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowfullscreen
                          className='rounded-lg shadow-lg shadow-blue/60'
                        >
                      </iframe>
                    </div>
                    <div className='p-8  md:px-40'>
                        <img src={content.windsurfingImgThreeSrc} alt={content.windsurfingImgThreeAlt} className='rounded-lg shadow-lg shadow-blue/60 lg:hidden' />
                      </div>
                    <div className='p-8 pb-20 md:px-40 bg-blue text-standard'>
                      <p className='text-3xl text-center'>
                        {content.whereToSailTitle}
                      </p>
                      <div className='grid grid-cols-1 lg:grid-cols-3  gap-8 pt-8'>
                        <div className='flex flex-col items-center p-4 rounded-lg'>
                          <p className='pb-4 text-xl font-bold '>
                            {content.spotOneTitle}
                          </p>
                          <p className='text-center text-turquosie'>
                            {content.spotOneInfo}
                          </p>
                        </div>
                        <div className='flex flex-col items-center p-4 rounded-lg '>
                          <p className='text-center pb-4 text-xl font-bold'>
                            {content.spotTwoTitle}
                          </p>
                          <p className='text-center'>
                            {content.spotTwoInfo}
                          </p>
                        </div>
                        <div className='flex flex-col items-center p-4 rounded-lg'>
                          <p className='text-center pb-4 text-xl font-bold'>
                            {content.spotThreeTitle}
                          </p>
                          <p className='text-center'>
                            {content.spotThreeInfo}
                          </p>
                        </div>
                        </div>
                      </div>
                      <div className='w-full p-8 md:px-40 flex justify-center'>
                        <img src={content.jwMarriottImg} alt={content.jwMarriottImgAlt} className='rounded-lg shadow-lg shadow-blue/60 ' />
                      </div>
                      <div className='p-8 md:px-40 flex flex-col items-center'>
                        <p className='pb-4 text-3xl text-center'>
                          {content.whatWeDidTitle}
                        </p>
                        <p className='max-w-5xl text-xl text-center'>
                          {content.whatWeDidInfo}
                        </p>
                      </div>
                      
                      <div className='w-full p-8 pb-20 md:px-40 grid grid-cols-1 lg:grid-cols-2 gap-8 px-20 center'>
                          <img src={content.windsurfingImgTwoSrc} alt={content.windsurfingImgTwoAlt} className='rounded-lg shadow-lg shadow-blue/60' />
                          <img src={content.windsurfingImgThreeSrc} alt={content.windsurfingImgThreeAlt} className='rounded-lg hidden lg:flex shadow-lg shadow-blue/60' />
                        </div>
                      <div className='w-full p-8 pb-20 md:px-40 bg-blue'>
                          <p className='text-3xl text-center text-standard'>
                              {content.rentalTitle}
                          </p>  
                        <div className='w-full grid lg:grid-cols-3 grid-cols-1 gap-8 items-center pt-8 '>
                          <div>
                            <p className='text-base text-center text-standard'>
                              {content.rentalInfoOne}
                            </p>
                          </div>
                          <div className='py-8 lg:py-0 '>
                            <img src={content.rentalImgSrc} alt={content.rentalImgAlt} className='rounded-lg aspect-auto '/>
                          </div>
                          <div>
                            <p className='text-base text-standard text-center'>
                              {content.rentalInfoTwo}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='w-full p-8 md:px-40 flex flex-col items-center '>
                        <p className='pb-8 text-3xl text-center'>
                          {content.safetyTitle}
                        </p>
                        <p className='pb-8 max-w-5xl text-xl text-center'>
                          {content.safetyInfo}
                        </p>
                        <div className='w-full  flex justify-center py-8'>
                          <img src={content.safetyImgSrc} alt={content.safetyImgAlt} className='rounded-lg w-full shadow-lg shadow-blue/60' />
                        </div>
                      </div>
                      <div className='p-8  bg-blue text-standard  md:px-40 flex flex-col items-center'>
                        <p className='pb-8 text-3xl text-center'>
                          {content.otherActivitiesTitle}
                        </p>
                        <p className='pb-8 max-w-5xl text-xl text-center'>
                          {content.otherActivitiesInfo}
                        </p>
                      </div>
                      <div className='px-20 md:px-40 py-8'>
                        <div className='flex flex-col items-center'>
                          <p className='pb-8 text-3xl text-center'>{content.whereToStayTitle}</p>
                          <p className='pb-8 max-w-5xl text-xl text-center'>{content.whereToStayInfo}</p>
                        </div>
                        <div className='w-full h-full flex flex-col lg:flex-row justify-between items-center '>
                          {content.accomodation.map(accom => {
                            return(
                              <div className='lg:py-0 p-8 min-w-4/6 group bg-standard '>
                                  <a href={accom.accomLink} target='_blank' rel='noreferrer' className='flex flex-col items-center justify-center p-4 rounded-lg shadow-lg shadow-blue/60 group-hover:bg-blue/60 ease-in-out duration-500'>
                                    <h1 className='pb-4 text-xl underline text-blue group-hover:text-standard ease-in-out duration-500'>{accom.accomTitle}</h1>
                                    <img src={accom.accomImgSrc} alt={accom.accomImgSrc} className='rounded-lg' width='300px' />  
                                  </a>
                                </div>
                            )
                          })}
                        </div>

                      </div>
                      <div className='px-20 md:px-40 py-8 flex justify-center'>
                        <p className='pb-8 max-w-5xl text-xl text-center'>Remember to check with local authorities or tourism offices for any updates or specific guidelines related to windsurfing in {content.outroLocation}. Enjoy your windsurfing adventure in this beautiful tropical paradise!</p>
                      </div>
                    </div>
                </div>
          </div>
  )
}

export default WindsurfingIn