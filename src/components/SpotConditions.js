import React from 'react'
import SplitImageText from './SplitImageText'

// destructure this and improve code
const SpotConditions = ({
    whenToGoDetails,
    waterConditionDetails,
    waterImage,
    windConditionDetails,
    windImage,
    windStatisticDetails,
    windStatisticImage,
    spotDetailsOne,
    spotDetailsTwo,
    spotDetailsThree,
    spotDetailsFour,
    spotDetailsFive,
    spotImage
}) => {
  return (
    <>
        {whenToGoDetails && (

            <div className='flex flex-col space-y-4 lg:space-y-8'>

                <h3 className='text-left text-2xl lg:text-5xl font-bold pb-6 uppercase'>
                    Conditions
                </h3>

                {whenToGoDetails && (
                    <div className="flex flex-col space-y-2 w-full">
                        <h4 className='text-left text-2xl lg:text-3xl font-bold pb-4 uppercase'>
                            When to go
                        </h4>
                        <p>
                            {whenToGoDetails}
                        </p>
                    </div>
                )}

                {waterConditionDetails && (
                    <SplitImageText 
                        title='Water conditions' 
                        texts={Array.isArray(waterConditionDetails) ? waterConditionDetails : [waterConditionDetails]} 
                        image={waterImage}
                        reverse
                    />
                )}
                {waterConditionDetails && (
                    <SplitImageText 
                        title='Wind Conditions' 
                        texts={[windConditionDetails]} 
                        image={windImage}
                        reverse
                    />
                )}
                {windStatisticDetails && (
                    <SplitImageText 
                        title='Wind statistics' 
                        texts={[windStatisticDetails]} 
                        image={windStatisticImage}
                        reverse
                    />
                )}

                {spotDetailsOne && (
                    <SplitImageText 
                        title='Spots' 
                        texts={[
                            spotDetailsOne,
                            spotDetailsTwo,
                            spotDetailsThree,
                            spotDetailsFour,
                            spotDetailsFive,
                        ]}  
                        image={spotImage}
                        reverse
                    />
                )}
                

            </div>
        )}
    </>
  )
}

export default SpotConditions