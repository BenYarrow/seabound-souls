import React from 'react'
import { vassiliki } from '../data/spot-guides/vassiliki'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../data/spot-guide-coordinate-data'

const VassilikiSpotGuide = () => {

    const coordinates = spotGuideCoordinates.vassiliki.marker.coordinates
    const markers = spotGuideCoordinates.vassiliki.markers

    return <SpotGuideTemplate spotGuide={vassiliki} coordinates={coordinates} markers={markers}/>
}

export default VassilikiSpotGuide



