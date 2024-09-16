import React from 'react'
import { leMorne } from '../Data/spot-guides/leMorne'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinate-data'

const LeMorneSpotGuide = () => {

    const coordinates = spotGuideCoordinates.leMorne.marker.coordinates
    const timeZone = spotGuideCoordinates.leMorne.timeZone
    const markers = spotGuideCoordinates.leMorne.markers

    return <SpotGuideTemplate spotGuide={leMorne} coordinates={coordinates} markers={markers} timeZone={timeZone}/>
}

export default LeMorneSpotGuide