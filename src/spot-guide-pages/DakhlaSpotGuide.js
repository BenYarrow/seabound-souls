import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinate-data'

const DakhlaSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Dakhla')
    const coordinates = spotGuideCoordinates.dakhla.marker.coordinates
    const markers = spotGuideCoordinates.dakhla.markers

    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates} markers={markers}/>
}

export default DakhlaSpotGuide