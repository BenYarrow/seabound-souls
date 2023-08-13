import React from 'react'

const ThingsToDo = ({content}) => {
  return (
          <div>
            <div className='w-full h-auto text-blue font-standard text-base '>
              <div id='mauritius-to-do-hero-section'>
                <div className='flex justify-center '>
                    <h2 className='text-center text-blue text-4xl'>
                      {content.title}
                    </h2>
                  </div>
                </div>
                <div className='bg-blue flex justify-center py-4 px-20 '>
                  <p className='text-center max-w-5xl py-4 rounded-lg text-standard text-xl'>
                    {content.blogIntro}
                  </p>
                </div>
                <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                  <p className='pb-4 text-3xl'>
                    {content.recomendationOneTitle}
                  </p>
                  <p className='max-w-5xl text-xl text-center'>
                    {content.recomendationOneInfo}
                  </p>
                  <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                    <img src={content.recomendationOneImgOneSrc} alt={content.recomendationOneImgOneAlt} className='basis-1/3 rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationOneImgTwoSrc} alt={content.recomendationOneImgTwoAlt} className='basis-1/3 rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationOneImgThreeSrc} alt={content.recomendationOneImgThreeAlt} className='basis-1/3 rounded-lg shadow-lg shadow-blue/60'/>
                  </div>
                </div>
                <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                  <p className='pb-4 text-3xl'>
                    {content.recomendationTwoTitle}
                  </p>
                  <p className='max-w-5xl text-xl text-center'>
                    {content.recomendationTwoInfo}
                  </p>
                  <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                    <img src={content.recomendationTwoImgOneSrc} alt={content.recomendationTwoImgOneAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationTwoImgTwoSrc} alt={content.recomendationTwoImgTwoAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationTwoImgThreeSrc} alt={content.recomendationTwoImgThreeAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                  </div>
                </div>
                <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                  <p className='pb-4 text-3xl'>
                    {content.recomendationThreeTitle}
                  </p>
                  <p className='max-w-5xl text-xl text-center'>
                    {content.recomendationThreeInfo}
                  </p>
                  <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                    <img src={content.recomendationThreeImgOneSrc} alt={content.recomendationThreeImgOneAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationThreeImgTwoSrc} alt={content.recomendationThreeImgTwoAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationThreeImgThreeSrc} alt={content.recomendationThreeImgThreeAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                  </div>
                </div>
                <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                  <p className='pb-4 text-3xl'>
                    {content.recomendationFourTitle}
                  </p>
                  <p className='max-w-5xl text-xl text-center'>
                    {content.recomendationFourInfo}
                  </p>
                  <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                    <img src={content.recomendationFourImgOneSrc} alt={content.recomendationFourImgOneAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationFourImgTwoSrc} alt={content.recomendationFourImgTwoAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationFourImgThreeSrc} alt={content.recomendationFourImgThreeAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                  </div>
                </div>
                <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                  <p className='pb-4 text-3xl'>
                    {content.recomendationFiveTitle}
                  </p>
                  <p className='max-w-5xl text-xl text-center'>
                    {content.recomendationFiveInfo}
                  </p>
                  <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                    <img src={content.recomendationFiveImgOneSrc} alt={content.recomendationFiveImgOneAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationFiveImgTwoSrc} alt={content.recomendationFiveImgTwoAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationFiveImgThreeSrc} alt={content.recomendationFiveImgThreeAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                  </div>
                </div>
                <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                  <p className='pb-4 text-3xl'>
                    {content.recomendationSixTitle}
                  </p>
                  <p className='max-w-5xl text-xl text-center'>
                    {content.recomendationSixInfo}
                  </p>
                  <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                    <img src={content.recomendationSixImgOneSrc} alt={content.recomendationSixImgOneAlt} className='rounded-lg shadow-blue/60'/>
                    <img src={content.recomendationSixImgTwoSrc} alt={content.recomendationSixImgTwoAlt} className='rounded-lg shadow-blue/60'/>
                    <img src={content.recomendationSixImgThreeSrc} alt={content.recomendationSixImgThreeAlt} className='rounded-lg shadow-blue/60'/>
                  </div>
                </div>
                <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                  <p className='pb-4 text-3xl'>
                    {content.recomendationSevenTitle}
                  </p>
                  <p className='max-w-5xl text-xl text-center'>
                    {content.recomendationSevenInfo}
                  </p>
                  <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                    <img src={content.recomendationSevenImgOneSrc} alt={content.recomendationSevenImgOneAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationSevenImgTwoSrc} alt={content.recomendationSevenImgTwoAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationSevenImgThreeSrc} alt={content.recomendationSevenImgThreeAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                  </div>
                </div>
                <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
                  <p className='pb-4 text-3xl'>
                    {content.recomendationEightTitle}
                  </p>
                  <p className='max-w-5xl text-xl text-center'>
                    {content.recomendationEightInfo}
                  </p>
                  <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                    <img src={content.recomendationEightImgOneSrc} alt={content.recomendationEightImgOneAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationEightImgTwoSrc} alt={content.recomendationEightImgTwoAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                    <img src={content.recomendationEightImgThreeSrc} alt={content.recomendationEightImgThreeAlt} className='rounded-lg shadow-lg shadow-blue/60'/>
                  </div>
                </div>
            </div>
          </div>
        )
}

export default ThingsToDo