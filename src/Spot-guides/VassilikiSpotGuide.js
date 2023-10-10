import React from 'react'
import StaticMasthead from '../Common-Components/StaticMasthead'
import PageHeading from '../Common-Components/PageHeading'
import { spotGuides } from '../Data/SpotGuides'


const VassilikiSpotGuide = () => {

    const masthead = "images/spotguides/vassiliki-spotguide.jpg"
    const vassSpotGuide = spotGuides.find(title => title.blogTitle === 'Vassiliki')
    const location = vassSpotGuide.blogLinkData.values(location => location.location)

    return (
        <div>

            <StaticMasthead imageSrc={masthead} />
            <PageHeading heading={vassSpotGuide.blogTitle} />

            <div className='pb-4 w-full flex justify-center'>
                <p>
                    Location: <span className='font-bold'>Vassiliki, Lefkada</span>
                </p>

            </div>

            <section className='bg-blue w-full py-8'>
                <p class="container mx-auto text-white text-center text-lg">
                    Vassiliki is a pretty town nestled on the southern coast of Lefkada. It’s renowned for its natural beauty, world class water sports scene and vibrant nightlife. Vassiliki has become a sought-after destination for travellers seeking a perfect blend of adventure and relaxation. Whether you're a watersports enthusiast, a beach lover, or simply looking to immerse yourself in the Greek island experience, Vassiliki offers a warm and welcoming atmosphere for all.
                </p>
            </section>

        </div>
    )
}

export default VassilikiSpotGuide

