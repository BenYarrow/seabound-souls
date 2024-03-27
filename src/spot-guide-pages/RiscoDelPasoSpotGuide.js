import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinate-data'

const RiscoDelPasoSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Risco Del Paso')
    const coordinates = spotGuideCoordinates.riscoDelPaso.marker.coordinates
    const markers = spotGuideCoordinates.riscoDelPaso.markers
    
    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates} markers={markers}/>
}

export default RiscoDelPasoSpotGuide