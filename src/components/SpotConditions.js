import React from 'react'
import SplitImageText from './SplitImageText'
import Text from '../components/Text'
import BlockWrapper from './BlockWrapper'
import AreaChart from './charts/AreaChart'
import { checkContentFormat } from '../helpers/funcntions'

const SpotConditions = ({
    whenToGoDetails,
    waterConditionDetails,
    waterImage,
    windConditionDetails,
    windImage,
    windStatisticDetails,
    windStatisticImage,
    spots,
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
                            content={checkContentFormat(whenToGoDetails)}
                        />
                    )}
                </BlockWrapper>

                {waterConditionDetails && (
                    <SplitImageText 
                        title='Water conditions' 
                        texts={checkContentFormat(waterConditionDetails)} 
                        image={waterImage}
                        reverse
                    />
                )}
                
                {windConditionDetails && (
                    <SplitImageText 
                        title='Wind Conditions' 
                        texts={checkContentFormat(windConditionDetails)} 
                        image={windImage}
                        reverse
                    />
                )}

                {windData && (
                    <BlockWrapper>
                        <AreaChart data={windData} title="Wind statistics"/>
                    </BlockWrapper>
                )}

                {windStatisticDetails && (
                    <SplitImageText 
                        title='Wind statistics' 
                        texts={[windStatisticDetails]} 
                        image={windStatisticImage}
                        reverse
                    />
                )}

                {spots && (
                    <SplitImageText 
                        title='Spots' 
                        texts={checkContentFormat(spots)}  
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