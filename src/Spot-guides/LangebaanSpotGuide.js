import React from 'react'
import { SpotGuidePages } from '../Data/SpotGuidePages'
import SpotGuideTemplate from './SpotGuideTemplate'

const LangebaanSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Langebaan')
    
    return (    
        <div>
            <SpotGuideTemplate spotGuide={spotGuide}/>
        </div>
    )
}

export default LangebaanSpotGuide



