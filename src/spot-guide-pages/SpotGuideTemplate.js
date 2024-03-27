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
import LiveWeatherData from '../components/api-weather-components/LiveWeatherData'
import LeafletMap from '../components/api-weather-components/LeafletMap'
import { checkContentFormat } from '../helpers/functions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SpotGuideTemplate = ({spotGuide, windData, coordinates, markers, timeZone}) => {

    return (    
        <div>
            <SiteHelmet
                customKeyWords={[spotGuide.title, spotGuide.location, spotGuide.metaKeyWords]}
            />

            <StaticMasthead image={spotGuide.masthead} />
            
            <div id='content'>

                {spotGuide.title &&  (
                    <BlockWrapper firstBlock={true}>
                        <Title title={`Windsurfing in ${spotGuide.title}`} h1 centreTitle/>
                        <section class="flex flex-col gap-y-4 lg:gap-y-8">

                            {spotGuide.location && (
                                <div className='w-full flex justify-center prose lg:prose-lg max-w-none py-0 prose-p:text-blue'>
                                    <p className='font-bold'>
                                        Location: <span className='font-normal'>{spotGuide.location}</span>
                                    </p>
                                </div>
                            )}
                            <div className='flex justify-between gap-4 lg:gap-8'>
                                <div className='flex flex-col items-center gap-y-1 lg:gap-y-2'>
                                    <p className='text-sm lg:text-xl text-left'>
                                        Beginner
                                    </p>
                                    <div className="flex gap-x-1">
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.b1 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.b2 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.b3 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.b4 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.b5 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-y-1 lg:gap-y-2'>
                                    <p className='text-sm lg:text-xl text-left'>
                                        Intermediate
                                    </p>
                                    <div className="flex gap-x-1">
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.i1 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.i2 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.i3 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.i4 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.i5 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-y-1 lg:gap-y-2 '>
                                    <p className='text-sm lg:text-xl text-left'>
                                        Advanced
                                    </p>
                                    <div className='flex gap-x-1'>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.a1 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.a2 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.a3 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.a4 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                        <FontAwesomeIcon icon={faStar} className={`${spotGuide.a5 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </BlockWrapper>
                )}
                


                {spotGuide.intro && (
                    <BlockWrapper>
                        <div className='border-y-[1px] border-white-darker'>
                            <Text
                                content={checkContentFormat(spotGuide.intro)}
                                centredText
                                />
                        </div>
                    </BlockWrapper>
                )}

                {coordinates && (
                    <BlockWrapper>
                        <LiveWeatherData lat={coordinates.lat} long={coordinates.long} timeZone={timeZone}/>
                    </BlockWrapper>
                )}

                {spotGuide.sailingStyle && (
                    <SpotOverview 
                        sailingStyle={spotGuide.sailingStyle}
                        bestConditions={spotGuide.bestConditions}
                        bestDirection={spotGuide.bestDirection}
                        windConditions={spotGuide.windConditions}
                        waterConditions={spotGuide.waterConditions}
                        launchZone={spotGuide.launchZone}
                    />
                )}

                {spotGuide.gridGalleryImageOne && (
                    <BlockWrapper >
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
                    spots={spotGuide.spots}
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
                        texts={checkContentFormat(spotGuide.otherActivityText)}
                        image={spotGuide.otherActivityImage}
                        reverse
                    />
                )}
            </div>

            {coordinates && (
                <LeafletMap lat={coordinates.lat} long={coordinates.long} markers={markers}/>
            )}

            <BlockWrapper customClasses="">
                <div className='flex justify-center items-center'>
                    <ButtonLink linkTo='#content' title='back to the top'/>
                </div>
            </BlockWrapper>

        </div>
    )
}

export default SpotGuideTemplate



