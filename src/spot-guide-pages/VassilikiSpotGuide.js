import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinates'

const VassilikiSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Vassiliki')
    const coordinates = spotGuideCoordinates.vassilikiCoordinates
    
    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates}/>
}

export default VassilikiSpotGuide



