import React from 'react'
import { dakhla } from '../data/spot-guides/dakhla'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../data/spot-guide-coordinate-data'

const DakhlaSpotGuide = () => {

    const coordinates = spotGuideCoordinates.dakhla.marker.coordinates
    const markers = spotGuideCoordinates.dakhla.markers

    return <SpotGuideTemplate spotGuide={dakhla} coordinates={coordinates} markers={markers}/>
}

export default DakhlaSpotGuide