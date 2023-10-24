import React from 'react'
import SplitImageText from './SplitImageText'

const SpotConditions = (props) => {
  return (
    <div className='flex flex-col space-y-6 md:space-y-8 lg:space-y-12'>

        <h3 className='text-left text-3xl lg:text-5xl font-bold'>
            Conditions
        </h3>

        <div className="flex flex-col space-y-2 lg:space-y-8 w-full">
            <h4 className='text-left text-2xl lg:text-3xl font-bold'>
                When to go
            </h4>
            <p>
                {props.whenToGoDetails}
            </p>
        </div>

        <SplitImageText 
            title='Water conditions' 
            text={props.waterConditionDetails} 
            image={props.waterImage}
            reverse
        />

        <SplitImageText 
            title='Wind Conditions' 
            text={props.windConditionDetails} 
            image={props.windImage}
            reverse
        />

        <SplitImageText 
            title='Wind statistics' 
            text={props.windStatisticDetails} 
            image={props.windStatisticImage}
            reverse
        />

        <SplitImageText 
            title='Spots' 
            text={props.spotDetails} 
            image={props.spotImage}
            reverse
        />
        

    </div>
  )
}

export default SpotConditions