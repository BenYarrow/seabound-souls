import React from 'react'
import { SpotGuidePages } from '../data/spot-guide-pages'
import SpotGuideTemplate from './SpotGuideTemplate'

const DahabSpotGuide = () => {

    const spotGuide = SpotGuidePages.find(spot => spot.title === 'Dahab')
    
    return (    
        <div>
            <SpotGuideTemplate spotGuide={spotGuide}/>

            <div>
                    <script src="https://www.windfinder.com/widget/forecast/js/dahab_lagoon?unit_wave=m&unit_rain=mm&unit_temperature=c&unit_wind=kts&unit_pressure=hPa&days=4&show_day=0&show_waves=0"></script><noscript><a rel="nofollow" href="https://www.windfinder.com/forecast/dahab_lagoon?utm_source=forecast&utm_medium=web&utm_campaign=homepageweather&utm_content=noscript-forecast">Wind forecast for Dahab Lagoon</a> provided by <a rel="nofollow" href="https://www.windfinder.com?utm_source=forecast&utm_medium=web&utm_campaign=homepageweather&utm_content=noscript-logo">windfinder.com</a></noscript>
            </div>
        </div>
    )
}

export default DahabSpotGuide