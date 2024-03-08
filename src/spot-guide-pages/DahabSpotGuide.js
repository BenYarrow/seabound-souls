import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinate-data'

const DahabSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Dahab')
    const coordinates = spotGuideCoordinates.dahab.locationCoordinates
    const markers = spotGuideCoordinates.dahab.markers

    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates} markers={markers}/>
}

export default DahabSpotGuide