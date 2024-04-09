import React from 'react'
import Text from "../components/Text"
import BlockWrapper from './BlockWrapper'
import { checkContentFormat } from '../helpers/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const BulletsAndImage = ({
    image, 
    imageLink,
    imageDescription, 
    title, 
    intro, 
    bulletListData = [],
    reverse = false,
}) => {

    const imageLinkWrapperClasses = 'w-full h-full flex items-end justify-start group group-hover:underline'

    return (
        <BlockWrapper >
            <div>
                <div className="grid grid-cols-1 gap-8 lg:gap-12">

                    <div>
                        {title && intro && (
                            <Text
                                title={title}
                                content={checkContentFormat(intro)}
                            />
                        )}
                        <div className='flex flex-col space-y-2'>
                            {bulletListData && (
                                <ul className="pl-12 flex flex-col space-y-2">
                                    {bulletListData.map((list, index) => {
                                        return (
                                            <li key={index} className={`list-disc prose lg:prose-lg max-w-none ${list.link !== null ? 'marker:text-orange' : 'marker:text-blue'}`}>
                                                {list.title != null &&  (
                                                    <>
                                                        {list.link != null ? (
                                                            <a href={list.link} target="_blank" rel="nofollow external noopener noreferrer" className='font-bold hover:underline text-orange flex gap-x-2 items-center'>
                                                                {list.title}
                                                                <FontAwesomeIcon icon={faExternalLink}/>
                                                            </a>
                                                        ) : (
                                                            <span key={index}>
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
                    {image && (
                        
                        <div className="relative group w-full h-80 md:h-96 lg:h-[600px] overflow-hidden">
                            <img src={image}
                                width="400"
                                height="400"
                                alt=""
                                className='w-full h-full absolute inset-0 object-cover group-hover:scale-105 transition duration-300'
                            />
                            {imageDescription != null && imageLink != null && (
                                <div className='w-full h-full bg-white'>
                                    <a href={imageLink} target="_blank" rel="nofollow external noopener noreferrer" className={imageLinkWrapperClasses}>
                                        <p href={imageLink} className="bg-white/80 hover:bg-white-darker/80 transition duration-300 z-10 w-full p-4 flex justify-between items-center">
                                            {imageDescription}
                                            <FontAwesomeIcon icon={faExternalLink}/>
                                        </p>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                    
                </div>
            </div>
        </BlockWrapper>
    )
}

export default BulletsAndImage