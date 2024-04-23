import React, {useState} from'react'
import StaticMasthead from'../components/StaticMasthead'
import SpotOverview from'../components/SpotOverview'
import ButtonLink from'../components/ButtonLink'
import SiteHelmet from'../components/SiteHelmet'
import BlockWrapper from "../components/BlockWrapper"
import Text from '../components/Text'
import LiveWeatherData from '../components/api-weather-components/LiveWeatherData'
import LeafletMap from '../components/maps/LeafletMap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import UtilityBar from '../components/UtilityBar'
import Gallery from '../components/Gallery'
import AreaChart from '../components/charts/AreaChart'
import ImageAndText from '../components/ImageAndText'
import ImageAndBullets from '../components/ImageAndBullets'

const SpotGuideTemplate = ({spotGuide, windData, coordinates, markers, timeZone}) => {

    const [isOpen, setIsOpen] = useState(false)
    console.log(spotGuide.lessonHireImage)
    return (    
        <div>
            <SiteHelmet
                customKeyWords={[spotGuide.title, spotGuide.location, spotGuide.metaKeyWords]}
                customContent={[
                    `Windsurfing in ${spotGuide.location}`,
                    `Windsurfing in ${spotGuide.title}`,
                    `${spotGuide.location} spot guide`,
                    `${spotGuide.title} spot guide`,
                ]}
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
                    <BlockWrapper padded={false} customClasses="mg-8 lg:mb-12">
                        <div className='border-y border-blue-lighter'>
                            <Text
                                content={spotGuide.intro}
                                centredText
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

                {spotGuide.waterConditionImage && spotGuide.waterConditionDetails &&(
                    <ImageAndText
                        image={spotGuide.waterConditionImage}
                        title="Water conditions"
                        content={spotGuide.waterConditionDetails}
                    />
                )}

                {spotGuide.windConditionImage && spotGuide.windConditionDetails && (
                    <ImageAndText
                        image={spotGuide.windConditionImage}
                        title="Wind conditions"
                        content={spotGuide.windConditionDetails}
                    />
                )}
                
                {spotGuide.whenToGoDetails && (
                    <Text 
                        title="When to go"
                        content={spotGuide.whenToGoDetails}
                    />
                )}
                
                {spotGuide.spotImage && spotGuide.spots && (
                    <ImageAndText
                        image={spotGuide.spotImage}
                        title="Spots"
                        content={spotGuide.spots}
                    />
                )}

                {windData && (
                    <AreaChart data={windData} title="Wind statistics"/>
                )}
                
                {spotGuide.lessonIntro && (
                    <ImageAndBullets
                        title='Lessons and Hire'
                        intro={spotGuide.lessonIntro}
                        bullets={spotGuide.lessonBulletData}
                        image={spotGuide.lessonHireImage}
                        imageDescription={spotGuide.lessonHireImageDescription}
                        imageLink={spotGuide.lessonHireImageLink}
                    />
                )}

                {spotGuide.gettingHereText && (
                    <ImageAndText 
                        image={spotGuide.gettingHereImage}
                        title={`Getting to ${spotGuide.title}`}
                        content={spotGuide.gettingHereText}
                    />
                )}

                {spotGuide.travellingIntro && spotGuide.travellingImage && (
                    <ImageAndBullets
                        image={spotGuide.travellingImage}
                        title='Travelling around'
                        intro={spotGuide.travellingIntro}
                        bullets={spotGuide.travellingBulletData}
                    />
                )}


                {spotGuide.stayIntro && (                    
                    <ImageAndBullets
                        image={spotGuide.stayImage}
                        imageDescription={spotGuide.stayImageDescription}
                        imageLink={spotGuide.stayImageLink}
                        title='Where to stay'
                        intro={spotGuide.stayIntro}
                        bullets={spotGuide.whereToStayBulletData}
                    />
                )}

                {spotGuide.whereToEatBulletData && (
                    <ImageAndBullets
                        image={spotGuide.eatImage}
                        imageDescription={spotGuide.eatImageDescription}
                        imageLink={spotGuide.eatImageLink}
                        title='Where to eat'
                        intro={spotGuide.eatIntro}
                        bullets={spotGuide.whereToEatBulletData}
                    />
                )}

                {spotGuide.otherActivityText && (
                    <ImageAndText
                        image={spotGuide.otherActivityImage}
                        title='Other Activities'
                        content={spotGuide.otherActivityText}
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



