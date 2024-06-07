import React from 'react'
import { leMorne } from '../data/spot-guides/leMorne'
import SpotGuideTemplate from './SpotGuideTemplate'
import { windData } from '../data/spot-guide-wind-data'
import { spotGuideCoordinates } from '../data/spot-guide-coordinate-data'

const LeMorneSpotGuide = () => {

    const leMorneWindData = windData.find(location => location.location === 'Le Morne').data
    const coordinates = spotGuideCoordinates.leMorne.marker.coordinates
    const timeZone = spotGuideCoordinates.leMorne.timeZone
    const markers = spotGuideCoordinates.leMorne.markers

    return <SpotGuideTemplate spotGuide={leMorne} windData={leMorneWindData} coordinates={coordinates} markers={markers} timeZone={timeZone}/>
}

export default LeMorneSpotGuide