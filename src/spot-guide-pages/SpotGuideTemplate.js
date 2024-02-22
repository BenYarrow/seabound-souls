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
import BlockWrapper from "../components/BlockWrapper"
import Text from '../components/Text'
import LiveWeatherData from '../components/LiveWeatherData'

const SpotGuideTemplate = ({spotGuide, windData, coordinates}) => {
    return (    
        <div>
            <SiteHelmet
                customKeyWords={[spotGuide.title, spotGuide.location, spotGuide.metaKeyWords]}
            />

            <StaticMasthead imageSrc={spotGuide.masthead} />
            
            <div id='content'>

                {spotGuide.title &&  (
                    <BlockWrapper>
                        <Title title={`Windsurfing in ${spotGuide.title}`} h1 centreTitle/>
                    </BlockWrapper>
                )}
                
                {spotGuide.location && (
                    <div className='w-full flex justify-center'>
                        <p className='font-bold'>
                            Location: <span className='font-normal'>{spotGuide.location}</span>
                        </p>
                    </div>
                )}

                {coordinates && (
                    <LiveWeatherData lat={coordinates.lat} long={coordinates.long}/>
                )}

                {spotGuide.intro && (
                    <BlockWrapper>
                        <div className='border-y-[1px] border-white-darker'>
                            <Text
                                content={[spotGuide.intro]}
                                centredText
                            />
                        </div>
                    </BlockWrapper>
                )}

                {spotGuide.sailingStyle && (
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
                )}

                {spotGuide.gridGalleryImageOne && (
                    <BlockWrapper>
                        <GridImageDisplay 
                            imageOne={spotGuide.gridGalleryImageOne}
                            imageTwo={spotGuide.gridGalleryImageTwo}
                            imageThree={spotGuide.gridGalleryImageThree}
                            imageFour={spotGuide.gridGalleryImageFour}
                        />
                    </BlockWrapper>
                )}

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
                    windData={windData}
                />
                
                {spotGuide.lessonIntro && (
                    <BulletsAndImage 
                        title='Lessons and Hire'
                        intro={spotGuide.lessonIntro}
                        bulletListData={spotGuide.lessonBulletData}
                        image={spotGuide.lessonHireImage}
                        imageDescription={spotGuide.lessonHireImageDescription}
                        imageLink={spotGuide.lessonHireImageLink}
                        reverse
                    />
                )}

                {spotGuide.gettingHereText && (
                    <SplitImageText
                        title={`Getting to ${spotGuide.title}`}
                        texts={spotGuide.gettingHereText}
                        image={spotGuide.gettingHereImage}
                        reverse
                    />
                )}

                {spotGuide.travellingIntro && (
                    <BulletsAndImage
                        title='Travelling around'
                        intro={spotGuide.travellingIntro}
                        bulletListData={spotGuide.travellingBulletData}
                        image={spotGuide.travellingImage}
                        reverse
                    />
                )}

                {spotGuide.stayIntro && (                    
                    <BulletsAndImage 
                        title='Where to stay'
                        intro={spotGuide.stayIntro}
                        bulletListData={spotGuide.whereToStayBulletData}
                        image={spotGuide.stayImage}
                        imageDescription={spotGuide.stayImageDescription}
                        imageLink={spotGuide.stayImageLink}
                        reverse
                    />
                )}

                {spotGuide.eatIntro && (
                    <BulletsAndImage 
                        title='Where to eat'
                        intro={spotGuide.eatIntro}
                        bulletListData={spotGuide.whereToEatBulletData}
                        image={spotGuide.eatImage}
                        imageDescription={spotGuide.eatImageDescription}
                        imageLink={spotGuide.eatImageLink}
                        reverse
                    />
                )}
                
                {spotGuide.otherActivityText && (    
                    <SplitImageText 
                        title='Other Activities'
                        texts={spotGuide.otherActivityText}
                        image={spotGuide.otherActivityImage}
                        reverse
                    />
                )}
            </div>

            <div className='w-full pt-8 pb-20 flex justify-center'>
                <ButtonLink linkTo='#content' title='back to the top'/>
            </div>

        </div>
    )
}

export default SpotGuideTemplate



