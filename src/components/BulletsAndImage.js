import React from 'react'
import Text from "../components/Text"
import BlockWrapper from './BlockWrapper'
import { checkContentFormat } from '../helpers/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import Image from './Image';

const BulletsAndImage = ({
    image, 
    imageLink,
    imageDescription, 
    title, 
    intro, 
    bulletListData = [],
}) => {

    return (
        <BlockWrapper >
                    <div>
                        {title && intro && (
                            <Text
                                title={title}
                                content={checkContentFormat(intro)}
                                container={false}
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
                        <Image 
                            image={image}
                            imageLink={imageLink}
                            imageDescription={imageDescription} 
                            container={false}
                        />
                    )}
                    
        </BlockWrapper>
    )
}

export default BulletsAndImage