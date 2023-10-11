import React from 'react'
import StaticMasthead from '../Common-Components/StaticMasthead'
import PageHeading from '../Common-Components/PageHeading'
import { SpotGuidePages } from '../Data/SpotGuidePages'
import SpotOverview from '../Common-Components/SpotOverview'


const VassilikiSpotGuide = () => {

    const vassSpotGuide = SpotGuidePages.find(spot => spot.title === 'Vassiliki')
    
    console.log(vassSpotGuide.discipline)
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

            <section className='container mx-auto py-8'>
                <SpotOverview b1 b2 b3 b4 i1 i2 i3 i4 a1 a2 a3 a4 
                    discipline={vassSpotGuide.discipline}
                    bestTime={vassSpotGuide.bestTime}
                    bestDirection={vassSpotGuide.bestDirection}
                    windConditions={vassSpotGuide.windConditions}
                    waterConditions={vassSpotGuide.waterConditions}
                />
            </section>

        </div>
    )
}

export default VassilikiSpotGuide

