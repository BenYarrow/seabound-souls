import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'

const LeMorneSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Le Morne')
    
    return (    
        <div>
            <SpotGuideTemplate spotGuide={spotGuide}/>
        </div>
    )
}

export default LeMorneSpotGuide