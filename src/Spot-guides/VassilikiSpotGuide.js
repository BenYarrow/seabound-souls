import React from 'react'
import StaticMasthead from '../Common-Components/StaticMasthead'
import PageHeading from '../Common-Components/PageHeading'
import { SpotGuidePages } from '../Data/SpotGuidePages'
import SpotOverview from '../Common-Components/SpotOverview'
import SpotConditions from '../Common-Components/SpotConditions'
import WhereToStay from '../Common-Components/WhereToStay'

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

            <section className='container mx-auto py-4'>
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

            <section className='container mx-auto py-4'>
                <WhereToStay 
                    accomodationOneTitle= 'Cosmos Hotel'
                    accomodationOneDetails= 'Located at the windward end of the bay which is recognized for providing optimum conditions and longest sail time. In our relaxed and exceptionally chilled surroundings, enjoy some pool time, a healthy lunch, maybe a cocktail or even dinner at our a la carte restaurant.'
                    accomodationOneImage= 'images/Vassiliki-Images/cosmos-hotel.jpg'
                    accomodationOneLink= 'https://cosmos-vassiliki.com/'
                    accomodationTwoTitle= 'Surf Hotel'
                    accomodationTwoImage= 'images/Vassiliki-Images/surf-hotel.jpg'
                    accomodationTwoDetails= 'Located right in front of the bay, this complex is designed to offer you everything that will make your vacation unforgettable and will satisfy your every need!'
                    accomodationTwoLink= 'https://surfhotel.gr/'
                />
            </section>

        </div>
    )
}

export default VassilikiSpotGuide

