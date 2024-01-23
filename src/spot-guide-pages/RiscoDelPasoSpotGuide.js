import React from 'react'
import { SpotGuidePages } from '../data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'

const RiscoDelPasoSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Risco Del Paso')
    
    return (    
        <div>
            <SpotGuideTemplate spotGuide={spotGuide}/>
        </div>
    )
}

export default RiscoDelPasoSpotGuide