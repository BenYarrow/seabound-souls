import React, {useState} from'react'
import StaticMasthead from'../components/StaticMasthead'
import SpotOverview from'../components/SpotOverview'
import BulletsAndImage from'../components/BulletsAndImage'
import SplitImageText from'../components/SplitImageText'
import ButtonLink from'../components/ButtonLink'
import SiteHelmet from'../components/SiteHelmet'
import BlockWrapper from "../components/BlockWrapper"
import Text from '../components/Text'
import LiveWeatherData from '../components/api-weather-components/LiveWeatherData'
import LeafletMap from '../components/maps/LeafletMap'
import { checkContentFormat } from '../helpers/functions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import UtilityBar from '../components/UtilityBar'
import Gallery from '../components/Gallery'
import Image from '../components/Image'
import AreaChart from '../components/charts/AreaChart'

const SpotGuideTemplate = ({spotGuide, windData, coordinates, markers, timeZone}) => {

    const [isOpen, setIsOpen] = useState(false)
    return (    
        <div>
            <SiteHelmet
                customKeyWords={[spotGuide.title, spotGuide.location, spotGuide.metaKeyWords]}
            />

            <StaticMasthead image={spotGuide.masthead} title={spotGuide.title} subtitle={spotGuide.location}/>
            
            <div id='content' className='relative'>
                
                <BlockWrapper padded>
                    <div class="flex justify-around w-full">
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
                </BlockWrapper>    

                {spotGuide.intro && (
                    <BlockWrapper>
                        <div className='border-y border-blue-lighter py-6'>
                            <Text
                                content={checkContentFormat(spotGuide.intro)}
                                centredText
                                reduceParagraphPadding 
                            />
                        </div>
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
                {spotGuide.galleryImages && (
                    <Gallery 
                        images={spotGuide.galleryImages}
                    />
                )}

                {spotGuide.waterConditionDetails && (
                    <Text 
                        title="Water conditions"
                        content={checkContentFormat(spotGuide.waterConditionDetails)}
                    />
                )}

                {spotGuide.waterConditionImage && (
                    <Image
                        image={spotGuide.waterConditionImage}
                    />
                )}

                {spotGuide.windConditionDetails && (
                    <Text 
                        title="Wind conditions"
                        content={checkContentFormat(spotGuide.windConditionDetails)}
                    />
                )}

                {spotGuide.windConditionImage && (
                    <Image
                        image={spotGuide.windConditionImage}
                    />
                )}
                
                {spotGuide.whenToGoDetails && (
                    <Text 
                        title="When to go"
                        content={checkContentFormat(spotGuide.whenToGoDetails)}
                    />
                )}
                
                {spotGuide.spots && (
                    <Text 
                        title="Spots"
                        content={checkContentFormat(spotGuide.spots)}
                    />
                )}

                {spotGuide.spotImage && (
                    <Image
                        image={spotGuide.spotImage}
                    />
                )}

                {windData && (
                    <AreaChart data={windData} title="Wind statistics"/>
                )}
                
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

                {spotGuide.whereToEatBulletData && (
                    <Text
                        title='Where to eat'
                        content={checkContentFormat(spotGuide.whereToEatBulletData)}
                    />
                )}

                {spotGuide.eatImage && (
                    <Image
                        image={spotGuide.eatImage}
                        imageDescription={spotGuide.eatImageDescription}
                        imageLink={spotGuide.eatImageLink}
                    />
                )}


                {spotGuide.otherActivityText && (
                    <Text
                        title='Other Activities'
                        content={checkContentFormat(spotGuide.otherActivityText)}
                    />
                )}

                {spotGuide.otherActivityImage && (
                    <Image 
                        image={spotGuide.otherActivityImage}
                    />
                )}
                
                {coordinates && (
                    <UtilityBar title="Current Conditions" isOpen={isOpen} setIsOpen={setIsOpen}>
                        <LiveWeatherData lat={coordinates.lat} long={coordinates.long} timeZone={timeZone} title={spotGuide.title} location={spotGuide.location} isOpen={isOpen}/>
                    </UtilityBar>
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



