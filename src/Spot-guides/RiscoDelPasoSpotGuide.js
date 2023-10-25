import React from 'react'
import StaticMasthead from '../Common-Components/StaticMasthead'
import PageHeading from '../Common-Components/PageHeading'
import { SpotGuidePages } from '../Data/SpotGuidePages'
import SpotOverview from '../Common-Components/SpotOverview'
import SpotConditions from '../Common-Components/SpotConditions'
import BulletsAndImage from '../Common-Components/BulletsAndImage'
import SplitImageText from '../Common-Components/SplitImageText'
import GridImageDisplay from '../Common-Components/GridImageDisplay'

const RiscoDelPasoSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Risco Del Paso')
    
    return (    
        <div>

            <StaticMasthead imageSrc={spotGuide.masthead} />
            
            <div id='content'>

                <PageHeading heading={spotGuide.title} />

                <div className='pb-4 lg:pb-8 w-full flex justify-center'>
                    <p className='font-bold'>
                        Location: <span className='font-normal'>{spotGuide.location}</span>
                    </p>

                </div>

                <section className='container mx-auto'>
                    <div className='border-y-[1px] border-white-darker py-4 lg:py-8'>
                        <p className="text-center text-base lg:text-lg">
                            {spotGuide.intro}
                        </p>
                    </div>
                </section>

                <section className='container mx-auto pt-4 lg:pt-8 pb-2 lg:pb-4'>
                    <SpotOverview b1 b2 b3 b4 i1 i2 i3 i4 a1 a2 a3 a4 
                        sailingStyle={spotGuide.sailingStyle}
                        bestConditions={spotGuide.bestConditions}
                        bestDirection={spotGuide.bestDirection}
                        windConditions={spotGuide.windConditions}
                        waterConditions={spotGuide.waterConditions}
                        launchZone={spotGuide.launchZone}
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <GridImageDisplay 
                        imageOne='images/Mauritius-Images/ben-windsurfing-01.jpg'
                        imageTwo='images/Mauritius-Images/rachel-windsurfing-01.jpg'
                        imageThree='images/Mauritius-Images/ben-windsurfing-02.jpg'
                        imageFour='images/Mauritius-Images/mauritius-01.jpg'
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <SpotConditions
                        waterConditionDetails={spotGuide.waterConditionDetails}
                        waterImage={spotGuide.waterConditionImage}
                        windConditionDetails={spotGuide.windConditionDetails}
                        windImage={spotGuide.windConditionImage}
                        windStatisticDetails={spotGuide.windStatisticDetails}
                        windStatisticImage={spotGuide.windStatisticImage}
                        whenToGoDetails={spotGuide.whenToGoDetails}
                        spotDetails={spotGuide.spotDetails}
                        spotImage={spotGuide.spotImage}
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <BulletsAndImage 
                        title= 'Lessons and Hire'
                        intro= 'At Le Morne there is one place to hire equipment from. This is the the ION club located right on the beach inbetween the world famouse underwater waterfall and Le Morne Brabant.'
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

                <section className='container mx-auto py-4 lg:py-8'>
                    <BulletsAndImage 
                        title= 'Where to stay'
                        intro={spotGuide.stayIntro}
                        titleOne={spotGuide.stayOneTitle}
                        linkOne={spotGuide.stayOneLink}
                        titleTwo={spotGuide.stayTwoTitle}
                        linkTwo={spotGuide.stayTwoLink}
                        titleThree={spotGuide.stayThreeTitle}
                        linkThree={spotGuide.stayThreeLink}
                        image={spotGuide.stayImage}
                        imageDescription={spotGuide.stayImageDescription}
                        imageLink={spotGuide.stayImageLink}
                        reverse
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <BulletsAndImage 
                        title= 'Where to eat'
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

                <section className='container mx-auto py-4 lg:py-8'>
                    <SplitImageText 
                        title='Other Activities'
                        text={spotGuide.otherActivityText}
                        reverse
                    />
                </section>
            </div>

            <div className='w-full pb-8 flex justify-center'>
                  <button className="px-8 py-2 bg-blue">
                    <a href='#content' className="relative text-xl text-white uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-300">
                      back to the top
                    </a>
                  </button>
            </div>

        </div>
    )
}

export default RiscoDelPasoSpotGuide