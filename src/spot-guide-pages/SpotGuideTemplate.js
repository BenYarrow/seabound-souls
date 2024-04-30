import React, {useState} from'react'
import StaticMasthead from'../components/StaticMasthead'
import SpotOverview from'../components/SpotOverview.tsx'
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
    
    const spotGuideNavigationLinks = [
        {
            title: `Water Conditions`,
            href: "#water-conditions",
            dependancy: spotGuide.waterConditionDetails ?? null
        },
        {
            title: `Wind Conditions`,
            href: "#wind-conditions",
            dependancy: spotGuide.windConditionDetails ?? null
        }, 
        {
            title: `When to go`,
            href: "#when-to-go",
            dependancy: spotGuide.whenToGoDetails ?? null
        },
        {
            title: `Spots`,
            href: "#spots",
            dependancy: spotGuide.spots ?? null
        }, 
        {
            title: `Lessons and Hire`,
            href: "#lessons-and-hire",
            dependancy: spotGuide.lessonBulletData | spotGuide.lessonIntro ?? null
        }, 
        {
            title: `Getting to ${spotGuide.title}`,
            href: `#getting-to-${spotGuide.title}`,
            dependancy: spotGuide.gettingHereText ?? null
        },
        {
            title: `Travelling around`,
            href: `#travelling-around`,
            dependancy: spotGuide.travellingIntro | spotGuide.travellingIntro ?? null
        },
        {
            title: `Where to stay`,
            href: `#where-to-stay`,
            dependancy: spotGuide.whereToStayBulletData ?? null
        },
        {
            title: `Where to eat`,
            href: `#where-to-eat`,
            dependancy: spotGuide.whereToEatBulletData ?? null
        },
        {
            title: `Other Activities`,
            href: `#other-activities`,
            dependancy: spotGuide.otherActivityText ?? null
        } 
    ]

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
                {/* <ul>
                    {spotGuideNavigationLinks.map((link, index) => {
                        return (
                            <>
                                {link.dependancy && (
                                    <li key={index}>
                                        <a href={link.href}>
                                            {link.title}
                                        </a>
                                    </li>
                                )}
                            </>
                        )
                    })}
                </ul> */}
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

                {spotGuide.waterConditionImage && spotGuide.waterConditionDetails && (
                    <div id="water-conditions">
                        <ImageAndText
                            image={spotGuide.waterConditionImage}
                            title="Water conditions"
                            content={spotGuide.waterConditionDetails}
                        />
                    </div>
                )}

                {spotGuide.windConditionImage && spotGuide.windConditionDetails && (
                    <div id="wind-conditions">
                        <ImageAndText
                            image={spotGuide.windConditionImage}
                            title="Wind conditions"
                            content={spotGuide.windConditionDetails}
                        />
                    </div>
                )}
                
                {spotGuide.whenToGoDetails && (
                    <div id="when-to-go">
                        <BlockWrapper >
                            <Text 
                                title="When to go"
                                content={spotGuide.whenToGoDetails}
                            />
                        </BlockWrapper>
                    </div>
                )}
                
                {spotGuide.spotImage && spotGuide.spots && (
                    <div id="spots">
                        <ImageAndText
                            image={spotGuide.spotImage}
                            title="Spots"
                            content={spotGuide.spots}
                        />
                    </div>
                )}

                {windData && (
                    <AreaChart data={windData} title="Wind statistics"/>
                )}
                
                {spotGuide.lessonIntro && (
                    <div id="lessons-and-hire">
                        <ImageAndBullets
                            title='Lessons and Hire'
                            intro={spotGuide.lessonIntro}
                            bullets={spotGuide.lessonBulletData}
                            image={spotGuide.lessonHireImage}
                            imageDescription={spotGuide.lessonHireImageDescription}
                            imageLink={spotGuide.lessonHireImageLink}
                        />
                    </div>
                )}

                {spotGuide.gettingHereText && (
                    <div id={`getting-to-${spotGuide.title}`}>
                        <ImageAndText 
                            image={spotGuide.gettingHereImage}
                            title={`Getting to ${spotGuide.title}`}
                            content={spotGuide.gettingHereText}
                        />
                    </div>
                )}

                {spotGuide.travellingIntro && spotGuide.travellingImage && (
                    <div id="travelling-around">
                        <ImageAndBullets
                            image={spotGuide.travellingImage}
                            title='Travelling around'
                            intro={spotGuide.travellingIntro}
                            bullets={spotGuide.travellingBulletData}
                        />
                    </div>
                )}


                {spotGuide.stayIntro && (          
                    <div id="where-to-stay">
                        <ImageAndBullets
                            image={spotGuide.stayImage}
                            imageDescription={spotGuide.stayImageDescription}
                            imageLink={spotGuide.stayImageLink}
                            title='Where to stay'
                            intro={spotGuide.stayIntro}
                            bullets={spotGuide.whereToStayBulletData}
                        />
                    </div>          
                )}

                {spotGuide.whereToEatBulletData && (
                    <div id="where-to-eat">
                        <ImageAndBullets
                            image={spotGuide.eatImage}
                            imageDescription={spotGuide.eatImageDescription}
                            imageLink={spotGuide.eatImageLink}
                            title='Where to eat'
                            intro={spotGuide.eatIntro}
                            bullets={spotGuide.whereToEatBulletData}
                        />
                    </div>
                )}

                {spotGuide.otherActivityText && (
                    <div id="other-activities">
                        <ImageAndText
                            image={spotGuide.otherActivityImage}
                            title='Other Activities'
                            content={spotGuide.otherActivityText}
                        />
                    </div>
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



