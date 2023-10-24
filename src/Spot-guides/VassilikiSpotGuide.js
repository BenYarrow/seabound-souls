import React from 'react'
import StaticMasthead from '../Common-Components/StaticMasthead'
import PageHeading from '../Common-Components/PageHeading'
import { SpotGuidePages } from '../Data/SpotGuidePages'
import SpotOverview from '../Common-Components/SpotOverview'
import SpotConditions from '../Common-Components/SpotConditions'
import BulletsAndImage from '../Common-Components/BulletsAndImage'
import SplitImageText from '../Common-Components/SplitImageText'
import GridImageDisplay from '../Common-Components/GridImageDisplay'

const VassilikiSpotGuide = () => {

    const vassSpotGuide = SpotGuidePages.find(spot => spot.title === 'Vassiliki')
    
    return (    
        <div>

            <StaticMasthead imageSrc={vassSpotGuide.masthead} />
            
            <div id='content'>

                <PageHeading heading={vassSpotGuide.title} />

                <div className='pb-4 lg:pb-8 w-full flex justify-center'>
                    <p className='font-bold'>
                        Location: <span className='font-normal'>{vassSpotGuide.location}</span>
                    </p>

                </div>

                <section className='container mx-auto'>
                    <div className='border-y-[1px] border-white-darker py-4 lg:py-8'>
                        <p className="text-center text-base lg:text-lg">
                            {vassSpotGuide.intro}
                        </p>
                    </div>
                </section>

                <section className='container mx-auto pt-4 lg:pt-8 pb-2 lg:pb-4'>
                    <SpotOverview b1 b2 b3 b4 i1 i2 i3 i4 a1 a2 a3 a4 
                        sailingStyle={vassSpotGuide.sailingStyle}
                        bestConditions={vassSpotGuide.bestConditions}
                        bestDirection={vassSpotGuide.bestDirection}
                        windConditions={vassSpotGuide.windConditions}
                        waterConditions={vassSpotGuide.waterConditions}
                        launchZone={vassSpotGuide.launchZone}
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <GridImageDisplay 
                        imageOne='images/Vassiliki-Images/cosmos-hotel.jpg'
                        imageTwo='images/mastheads/homepage/windsurfing-together-01.jpg'
                        imageThree='images/mastheads/homepage/windsurfing-together-02.jpg'
                        imageFour='images/Vassiliki-Images/surf-hotel.jpg'
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <SpotConditions
                        waterConditionDetails={vassSpotGuide.waterConditionDetails}
                        waterImage={vassSpotGuide.waterConditionImage}
                        windConditionDetails={vassSpotGuide.windConditionDetails}
                        windImage={vassSpotGuide.windConditionImage}
                        windStatisticDetails={vassSpotGuide.windStatisticDetails}
                        windStatisticImage={vassSpotGuide.windStatisticImage}
                        whenToGoDetails={vassSpotGuide.whenToGoDetails}
                        spotDetails={vassSpotGuide.spotDetails}
                        spotImage={vassSpotGuide.spotImage}
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <BulletsAndImage 
                        title= 'Lessons and Hire'
                        intro= 'There are numerous windsurfing centres are located along the Vassiliki waterfront, offering equipment rental and lessons. These include:'
                        titleOne={vassSpotGuide.lessonTitleOne}
                        linkOne={vassSpotGuide.lessonLinkOne}
                        titleTwo={vassSpotGuide.lessonTitleTwo}
                        linkTwo={vassSpotGuide.lessonLinkTwo}
                        titleThree={vassSpotGuide.lessonTitleThree}
                        linkThree={vassSpotGuide.lessonLinkThree}
                        image={vassSpotGuide.lessonHireImage}
                        imageDescription={vassSpotGuide.lessonHireImageDescription}
                        imageLink={vassSpotGuide.lessonHireImageLink}
                        reverse
                    />

                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <BulletsAndImage 
                        title= 'Where to stay'
                        intro={vassSpotGuide.stayIntro}
                        titleOne={vassSpotGuide.stayOneTitle}
                        linkOne={vassSpotGuide.stayOneLink}
                        titleTwo={vassSpotGuide.stayTwoTitle}
                        linkTwo={vassSpotGuide.stayTwoLink}
                        titleThree={vassSpotGuide.stayThreeTitle}
                        linkThree={vassSpotGuide.stayThreeLink}
                        image={vassSpotGuide.stayImage}
                        imageDescription={vassSpotGuide.stayImageDescription}
                        imageLink={vassSpotGuide.stayImageLink}
                        reverse
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <BulletsAndImage 
                        title= 'Where to eat'
                        intro={vassSpotGuide.eatIntro}
                        titleOne={vassSpotGuide.eatTitleOne}
                        linkOne={vassSpotGuide.eatLinkOne}
                        titleTwo={vassSpotGuide.eatTitleTwo}
                        linkTwo={vassSpotGuide.eatLinkTwo}
                        titleThree={vassSpotGuide.eatTitleThree}
                        linkThree={vassSpotGuide.eatLinkThree}
                        titleFour={vassSpotGuide.eatTitleFour}
                        linkFour={vassSpotGuide.eatLinkFour}
                        titleFive={vassSpotGuide.eatTitleFive}
                        linkFive={vassSpotGuide.eatLinkFive}
                        titleSix={vassSpotGuide.eatTitleSix}
                        linkSix={vassSpotGuide.eatLinkSix}
                        titleSeven={vassSpotGuide.eatTitleSeven}
                        linkSeven={vassSpotGuide.eatLinkSeven}
                        titleEight={vassSpotGuide.eatTitleEight}
                        linkEight={vassSpotGuide.eatLinkEight}
                        image={vassSpotGuide.eatImage}
                        imageDescription={vassSpotGuide.eatImageDescription}
                        imageLink={vassSpotGuide.eatImageLink}
                        reverse
                    />
                </section>

                <section className='container mx-auto py-4 lg:py-8'>
                    <SplitImageText 
                        title='Other Activities'
                        text="In addition to windsurfing, you can enjoy other water sports like sailing, kayaking, and paddleboarding.
                        You can hire a car and explore the islands beautiful beaches, hiking trails and traditional Greek villages.
                        Consider hiring a boat from Sivota and exploring the many caves and hidden beaches.
                        You can even take the ferry from Nidri to Kefalonia."
                        reverse='true'
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

export default VassilikiSpotGuide



