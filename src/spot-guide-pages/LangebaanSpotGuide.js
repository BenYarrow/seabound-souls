import React from 'react'
import { langebaan } from '../data/spot-guides/langebaan'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../data/spot-guide-coordinate-data'

const LangebaanSpotGuide = () => {

    const coordinates = spotGuideCoordinates.langebaan.marker.coordinates
    const markers = spotGuideCoordinates.langebaan.markers
    
    return <SpotGuideTemplate spotGuide={langebaan} coordinates={coordinates} markers={markers}/>
}

export default LangebaanSpotGuide



