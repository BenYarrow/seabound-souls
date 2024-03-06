import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinates'

const RiscoDelPasoSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Risco Del Paso')
    const coordinates = spotGuideCoordinates.riscoDelPaso.locationCoordinates
    
    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates}/>
}

export default RiscoDelPasoSpotGuide