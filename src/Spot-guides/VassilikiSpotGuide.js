import React from 'react'
import StaticMasthead from '../Common-Components/StaticMasthead'
import PageHeading from '../Common-Components/PageHeading'
import { SpotGuidePages } from '../Data/SpotGuidePages'
import SpotOverview from '../Common-Components/SpotOverview'
import SpotConditions from '../Common-Components/SpotConditions'
import BulletsAndImage from '../Common-Components/BulletsAndImage'
import WhereToStay from '../Common-Components/WhereToStay'
import SplitImageText from '../Common-Components/SplitImageText'

const VassilikiSpotGuide = () => {

    const vassSpotGuide = SpotGuidePages.find(spot => spot.title === 'Vassiliki')
    
    return (    
        <div>

            <StaticMasthead imageSrc={vassSpotGuide.masthead} />
            <PageHeading heading={vassSpotGuide.title} />

            <div className='pb-8 w-full flex justify-center'>
                <p className='font-bold'>
                    Location: <span className='font-normal'>{vassSpotGuide.location}</span>
                </p>

            </div>

            <section className='container mx-auto'>
                <div className=' border-y-[1px] border-white-darker py-8'>
                    <p className=" text-center text-lg">
                        {vassSpotGuide.intro}
                    </p>
                </div>
            </section>

            <section className='container mx-auto pt-8 pb-4'>
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
                    reverse='true'
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
                    reverse= 'true'
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
                    titleFour={vassSpotGuide.eatTitleFour}
                    titleFive={vassSpotGuide.eatTitleFive}
                    titleSix={vassSpotGuide.eatTitleSix}
                    titleSeven={vassSpotGuide.eatTitleSeven}
                    titleEight={vassSpotGuide.eatTitleEight}
      
                    image={vassSpotGuide.eatImage}
                    reverse= 'true'
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
    )
}

export default VassilikiSpotGuide



