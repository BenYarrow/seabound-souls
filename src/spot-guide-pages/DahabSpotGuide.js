import React from 'react'
import { dahab } from '../data/spot-guides/dahab'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../data/spot-guide-coordinate-data'

const DahabSpotGuide = () => {

    const coordinates = spotGuideCoordinates.dahab.marker.coordinates
    const markers = spotGuideCoordinates.dahab.markers

    return <SpotGuideTemplate spotGuide={dahab} coordinates={coordinates} markers={markers}/>
}

export default DahabSpotGuide