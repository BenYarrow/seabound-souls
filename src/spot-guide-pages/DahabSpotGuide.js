import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinate-data'

const DahabSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Dahab')
    const coordinates = spotGuideCoordinates.dahab.locationCoordinates

    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates}/>
}

export default DahabSpotGuide