import React from 'react'
import { SpotGuidePages } from '../Data/SpotGuidePages'
import SpotGuideTemplate from './SpotGuideTemplate'

const DahabSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Dahab')
    
    return (    
        <div>
            <SpotGuideTemplate spotGuide={spotGuide}/>
        </div>
    )
}

export default DahabSpotGuide