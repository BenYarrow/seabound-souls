import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { windData } from '../Data/spot-guide-wind-data'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinates'

const LeMorneSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Le Morne')    
    const leMorneWindData = windData.find(location => location.location === 'Le Morne').data
    const coordinates = spotGuideCoordinates.leMorne.locationCoordinates

    return <SpotGuideTemplate spotGuide={spotGuide} windData={leMorneWindData} coordinates={coordinates}/>
}

export default LeMorneSpotGuide