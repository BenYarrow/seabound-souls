import React from'react'
import StaticMasthead from'../components/StaticMasthead'
import Title from '../components/Title'
import SpotOverview from'../components/SpotOverview'
import SpotConditions from'../components/SpotConditions'
import BulletsAndImage from'../components/BulletsAndImage'
import SplitImageText from'../components/SplitImageText'
import GridImageDisplay from'../components/GridImageDisplay'
import ButtonLink from'../components/ButtonLink'
import SiteHelmet from'../components/SiteHelmet'

const SpotGuideTemplate = ({spotGuide}) => {
    
    const galleryImages = [spotGuide.gridGalleryImageOne, spotGuide.gridGalleryImageTwo, spotGuide.gridGalleryImageThree, spotGuide.gridGalleryImageFour]
    
    return (    
        <div>
            <SiteHelmet
                customKeyWords={[spotGuide.title, spotGuide.location, spotGuide.metaKeyWords]}
                
            />

            <StaticMasthead imageSrc={spotGuide.masthead} />
            
            <div id='content'>

                {spotGuide.title && spotGuide.location && (
                    <Title title={spotGuide.title} />
                )}
                {spotGuide.location && (
                    <div className='pb-4 lg:pb-8 w-full flex justify-center'>
                        <p className='font-bold'>
                            Location: <span className='font-normal'>{spotGuide.location}</span>
                        </p>
                    </div>
                )}

                {spotGuide.intro && (
                    <section className='container mx-auto'>
                        <div className='border-y-[1px] border-white-darker py-4'>
                            <p className="text-center text-base lg:text-lg">
                                {spotGuide.intro}
                            </p>
                        </div>
                    </section>
                )}

                {spotGuide.sailingStyle && (
                    <section className='container mx-auto py-4'>
                        <SpotOverview 
                            b1={spotGuide.b1} b2={spotGuide.b2} b3={spotGuide.b3} b4={spotGuide.b4} b5={spotGuide.b5} 
                            i1={spotGuide.i1} i2={spotGuide.i2} i3={spotGuide.i3} i4={spotGuide.i4} i5={spotGuide.i5} 
                            a1={spotGuide.a1} a2={spotGuide.a2} a3={spotGuide.a3} a4={spotGuide.a4} a5={spotGuide.a5} 
                            sailingStyle={spotGuide.sailingStyle}
                            bestConditions={spotGuide.bestConditions}
                            bestDirection={spotGuide.bestDirection}
                            windConditions={spotGuide.windConditions}
                            waterConditions={spotGuide.waterConditions}
                            launchZone={spotGuide.launchZone}
                        />
                    </section>
                )}

                {spotGuide.gridGalleryImageOne && (
                    <section className='container mx-auto py-4'>
                        <GridImageDisplay 
                            imageOne={spotGuide.gridGalleryImageOne}
                            imageTwo={spotGuide.gridGalleryImageTwo}
                            imageThree={spotGuide.gridGalleryImageThree}
                            imageFour={spotGuide.gridGalleryImageFour}
                        />
                    </section>
                )}

                <section className='container mx-auto py-4'>
                    <SpotConditions
                        waterConditionDetails={spotGuide.waterConditionDetails}
                        waterImage={spotGuide.waterConditionImage}
                        windConditionDetails={spotGuide.windConditionDetails}
                        windImage={spotGuide.windConditionImage}
                        windStatisticDetails={spotGuide.windStatisticDetails}
                        windStatisticImage={spotGuide.windStatisticImage}
                        windStatGraph={spotGuide.windStatGraph}
                        whenToGoDetails={spotGuide.whenToGoDetails}
                        spotDetailsOne={spotGuide.spotDetailsOne}
                        spotDetailsTwo={spotGuide.spotDetailsTwo}
                        spotDetailsThree={spotGuide.spotDetailsThree}
                        spotDetailsFour={spotGuide.spotDetailsFour}
                        spotImage={spotGuide.spotImage}
                    />
                </section>
                
                {spotGuide.lessonIntro && (
                    <section className='container mx-auto py-4'>
                        <BulletsAndImage 
                            title='Lessons and Hire'
                            intro={spotGuide.lessonIntro}
                            titleOne={spotGuide.lessonTitleOne}
                            linkOne={spotGuide.lessonLinkOne}
                            titleTwo={spotGuide.lessonTitleTwo}
                            linkTwo={spotGuide.lessonLinkTwo}
                            titleThree={spotGuide.lessonTitleThree}
                            linkThree={spotGuide.lessonLinkThree}
                            image={spotGuide.lessonHireImage}
                            imageDescription={spotGuide.lessonHireImageDescription}
                            imageLink={spotGuide.lessonHireImageLink}
                            reverse
                        />
                    </section>
                )}

                {spotGuide.gettingHereText && (
                    <section className='container mx-auto py-4'>
                        <SplitImageText
                            title={`Getting to ${spotGuide.title}`}
                            texts={[spotGuide.gettingHereText]}
                            image={spotGuide.gettingHereImage}
                            reverse
                        />
                    </section>
                )}

                {spotGuide.travellingIntro && (
                    <section className='container mx-auto py-4'>
                        <BulletsAndImage
                            title='Travelling around'
                            intro={spotGuide.travellingIntro}
                            titleOne={spotGuide.travellingOneTitle}
                            linkOne={spotGuide.travellingOneLink}
                            titleTwo={spotGuide.travellingTwoTitle}
                            linkTwo={spotGuide.travellingTwoLink}
                            titleThree={spotGuide.travellingThreeTitle}
                            linkThree={spotGuide.travellingThreeLink}
                            image={spotGuide.travellingImage}
                            reverse
                        />
                    </section>
                )}

                {spotGuide.stayIntro && (                    
                    <section className='container mx-auto py-4'>
                        <BulletsAndImage 
                            title='Where to stay'
                            intro={spotGuide.stayIntro}
                            titleOne={spotGuide.stayOneTitle}
                            linkOne={spotGuide.stayOneLink}
                            titleTwo={spotGuide.stayTwoTitle}
                            linkTwo={spotGuide.stayTwoLink}
                            titleThree={spotGuide.stayThreeTitle}
                            linkThree={spotGuide.stayThreeLink}
                            titleFour={spotGuide.stayFourTitle}
                            linkFour={spotGuide.stayFourLink}
                            image={spotGuide.stayImage}
                            imageDescription={spotGuide.stayImageDescription}
                            imageLink={spotGuide.stayImageLink}
                            reverse
                        />
                    </section>
                )}

                {spotGuide.eatIntro && (
                                    
                    <section className='container mx-auto py-4'>
                        <BulletsAndImage 
                            title='Where to eat'
                            intro={spotGuide.eatIntro}
                            titleOne={spotGuide.eatTitleOne}
                            linkOne={spotGuide.eatLinkOne}
                            titleTwo={spotGuide.eatTitleTwo}
                            linkTwo={spotGuide.eatLinkTwo}
                            titleThree={spotGuide.eatTitleThree}
                            linkThree={spotGuide.eatLinkThree}
                            titleFour={spotGuide.eatTitleFour}
                            linkFour={spotGuide.eatLinkFour}
                            titleFive={spotGuide.eatTitleFive}
                            linkFive={spotGuide.eatLinkFive}
                            titleSix={spotGuide.eatTitleSix}
                            linkSix={spotGuide.eatLinkSix}
                            titleSeven={spotGuide.eatTitleSeven}
                            linkSeven={spotGuide.eatLinkSeven}
                            titleEight={spotGuide.eatTitleEight}
                            linkEight={spotGuide.eatLinkEight}
                            image={spotGuide.eatImage}
                            imageDescription={spotGuide.eatImageDescription}
                            imageLink={spotGuide.eatImageLink}
                            reverse
                        />
                    </section>
                )}
                
                {spotGuide.otherActivityText && (    
                    <section className='container mx-auto py-4'>
                        <SplitImageText 
                            title='Other Activities'
                            texts={[spotGuide.otherActivityText]}
                            image={spotGuide.otherActivityImage}
                            reverse
                        />
                    </section>
                )}
            </div>

            <div className='w-full pt-8 pb-20 flex justify-center'>
                  <ButtonLink linkTo='#content' title='back to the top'/>
            </div>

        </div>
    )
}

export default SpotGuideTemplate



