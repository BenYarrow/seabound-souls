import React from 'react'
import SplitImageText from './SplitImageText'

const SpotConditions = (props) => {
  return (
    <div className='flex flex-col space-y-12'>

        <h3 className='text-left text-3xl lg:text-5xl font-bold'>
            Conditions
        </h3>

        <div className="flex flex-col space-y-8 w-full">
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
            reverse='false'
        />

        <SplitImageText 
            title='Wind Conditions' 
            text={props.windConditionDetails} 
            image={props.windImage}
            reverse='true'
        />

        <SplitImageText 
            title='Wind statistics' 
            text={props.windStatisticDetails} 
            image={props.windStatisticImage}
            reverse='false'
        />

        <SplitImageText 
            title='Spots' 
            text={props.spotDetails} 
            image={props.spotImage}
            reverse='true'
        />
        

    </div>
  )
}

export default SpotConditions