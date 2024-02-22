import React from 'react'
import SplitImageText from './SplitImageText'
import Text from '../components/Text'
import BlockWrapper from './BlockWrapper'
import AreaChart from './charts/AreaChart'

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
    spotImage,
    windData
}) => {
  return (

    <section>
        {whenToGoDetails && (

            <div>
                <BlockWrapper  >
                    <h3 className="pb-8 text-4xl uppercase font-bold">
                        Conditions
                    </h3>

                    {whenToGoDetails && (
                        <Text
                            title="When to go"
                            content={[whenToGoDetails]}
                        />
                    )}

                    {windData && (
                        <AreaChart data={windData}/>
                    )}
                </BlockWrapper>

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
                            spotDetailsFive
                        ]}  
                        image={spotImage}
                        reverse
                    />
                )}
            </div>
        )}
    </section>
  )
}

export default SpotConditions