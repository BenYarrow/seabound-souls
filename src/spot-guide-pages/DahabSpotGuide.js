import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinates'

const DahabSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Dahab')
    const coordinates = spotGuideCoordinates.dahabCoordinates

    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates}/>
}

export default DahabSpotGuide