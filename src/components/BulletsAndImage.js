import React from 'react'
import Text from "../components/Text"
import BlockWrapper from './BlockWrapper'

const BulletsAndImage = ({
    image, 
    imageLink,
    imageDescription, 
    title, 
    intro, 
    bulletListData = [],
    reverse = false,
}) => {

    const imageLinkWrapperClasses = 'group-hover:bg-white/60 w-full h-full flex items-center justify-center transition duration-300'

    return (
        <BlockWrapper >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                {image && (
                    <div className={`${reverse ? 'order-last' : ''}  w-full h-80 lg:h-96 aspect-square bg-center bg-cover overflow-hidden group`}>
                        <div className='w-full h-full bg-center bg-cover hover:scale-105 transition duration-300 -z-10'
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundRepeat: "no-repeat",
                            }}
                        > 
                            {imageDescription != null && (
                                <>
                                {imageLink != null ? (
                                    <a href={imageLink} target="_blank" rel="noreferrer" className={imageLinkWrapperClasses}>
                                        <p href={imageLink} className="text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                                            {imageDescription}
                                        </p>
                                    </a>
                                ) : (
                                    <div className={imageLinkWrapperClasses}>
                                        <p href={imageLink} className="text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                                            {imageDescription}
                                        </p>
                                    </div>
                                )}
                                </>
                            )}
                        </div>
                    </div>
                )}

                <div>
                    {title && intro && (
                        <Text
                            title={title}
                            content={[intro]}
                        />
                    )}
                    <div className='flex flex-col space-y-2'>
                        {bulletListData && (
                            <ul className="pl-12 flex flex-col space-y-2">
                                {bulletListData.map((list, index) => {
                                    return (
                                        <li key={index} className='list-disc prose marker:text-blue'>
                                            {list.title != null &&  (
                                                <>
                                                    {list.link != null ? (
                                                        <a href={list.link} target="_blank" rel="noreferrer" className='font-bold hover:underline text-blue'>
                                                            {list.title}
                                                        </a>
                                                    ) : (
                                                        <span key={index} className="text-blue">
                                                            {list.title}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </li>
                                    )
                                })}
                        </ul>
                    )}
                    </div>
                </div>
            </div>
        </BlockWrapper>
    )
}

export default BulletsAndImage