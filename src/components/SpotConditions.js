import React from 'react'
import SplitImageText from './SplitImageText'
import Text from '../components/Text'
import Title from '../components/Title'

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

                <Title 
                    title="Conditions"
                />

                {whenToGoDetails && (
                    <Text
                        title="When to go"
                        content={[whenToGoDetails]}
                    />
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