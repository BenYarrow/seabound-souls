import React from 'react'
import SplitImageText from './SplitImageText'

const SpotConditions = (props) => {
  return (
    <>
        {props.whenToGoDetails && (

            <div className='flex flex-col space-y-6 md:space-y-8 lg:space-y-12'>

                <h3 className='text-left text-2xl lg:text-5xl font-bold pb-6 uppercase'>
                    Conditions
                </h3>

                {props.whenToGoDetails && (
                    <div className="flex flex-col space-y-2 lg:space-y-8 w-full">
                        <h4 className='text-left text-2xl lg:text-3xl font-bold pb-4 uppercase'>
                            When to go
                        </h4>
                        <p>
                            {props.whenToGoDetails}
                        </p>
                    </div>
                )}

                {props.waterConditionDetails && (
                    <SplitImageText 
                        title='Water conditions' 
                        textOne={props.waterConditionDetails} 
                        image={props.waterImage}
                        reverse
                    />
                )}
                {props.waterConditionDetails && (
                    <SplitImageText 
                        title='Wind Conditions' 
                        textOne={props.windConditionDetails} 
                        image={props.windImage}
                        reverse
                    />
                )}
                {props.windStatisticDetails && (
                    <SplitImageText 
                        title='Wind statistics' 
                        textOne={props.windStatisticDetails} 
                        image={props.windStatisticImage}
                        reverse
                    />
                )}

                {props.spotDetailsOne && (
                    <SplitImageText 
                        title='Spots' 
                        textOne={props.spotDetailsOne} 
                        textTwo={props.spotDetailsTwo} 
                        textThree={props.spotDetailsThree} 
                        textFour={props.spotDetailsFour}
                        textFive={props.spotDetailsFive} 
                        image={props.spotImage}
                        reverse
                    />
                )}
                

            </div>
        )}
    </>
  )
}

export default SpotConditions