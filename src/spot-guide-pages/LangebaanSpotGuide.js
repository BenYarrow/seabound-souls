import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinate-data'

const LangebaanSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Langebaan')
    const coordinates = spotGuideCoordinates.langebaan.marker.coordinates
    const markers = spotGuideCoordinates.langebaan.markers
    
    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates} markers={markers}/>
}

export default LangebaanSpotGuide



