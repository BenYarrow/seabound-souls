import React from 'react'
import { SpotGuidePages } from '../Data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'
import { spotGuideCoordinates } from '../Data/spot-guide-coordinates'

const LangebaanSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Langebaan')
    const coordinates = spotGuideCoordinates.langebaan.locationCoordinates
    
    return <SpotGuideTemplate spotGuide={spotGuide} coordinates={coordinates}/>
}

export default LangebaanSpotGuide



