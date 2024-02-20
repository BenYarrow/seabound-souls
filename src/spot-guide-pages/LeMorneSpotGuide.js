import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { windData } from '../Data/spot-guide-wind-data'

const LeMorneSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Le Morne')    
    const leMorneWindData = windData.find(location => location.location === 'Le Morne').data

    return <SpotGuideTemplate spotGuide={spotGuide} windData={leMorneWindData}/>
}

export default LeMorneSpotGuide