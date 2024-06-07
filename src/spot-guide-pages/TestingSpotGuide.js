import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'

const TestingSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'testing')
    
    return (    
        <div>
            <SpotGuideTemplate spotGuide={spotGuide}/>
        </div>
    )
}

export default TestingSpotGuide



