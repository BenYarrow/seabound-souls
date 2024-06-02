import React from 'react'
import { riscoDelPaso } from '../Data/spot-guides/riscoDelPaso'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinate-data'

const RiscoDelPasoSpotGuide = () => {

    const coordinates = spotGuideCoordinates.riscoDelPaso.marker.coordinates
    const markers = spotGuideCoordinates.riscoDelPaso.markers
    
    return <SpotGuideTemplate spotGuide={riscoDelPaso} coordinates={coordinates} markers={markers}/>
}

export default RiscoDelPasoSpotGuide