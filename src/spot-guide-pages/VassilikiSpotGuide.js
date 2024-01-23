import React from 'react'
import { SpotGuidePages } from '../data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'

const VassilikiSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Vassiliki')
    
    return (    
        <div>
            <SpotGuideTemplate spotGuide={spotGuide}/>
        </div>
    )
}

export default VassilikiSpotGuide



