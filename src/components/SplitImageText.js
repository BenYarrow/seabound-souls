import React from 'react';
import Text from '../components/Text'
import BlockWrapper from './BlockWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const SplitImageText = ({
    reverse = false, 
    image, 
    imageDescription = 'Seabound Souls', 
    imageLink = 'https://www.instagram.com/seabound.souls/', 
    title, 
    texts = []
}) => {

    const imageLinkWrapperClasses = 'w-full h-full flex items-end justify-start group group-hover:underline'

    return (
        <BlockWrapper>
            <div className="grid grid-cols-1 gap-8 lg:gap-12">
                {image && (
                        <div className={`${reverse ? 'order-last' : 'order-first'} relative group w-full h-80 md:h-96 lg:h-[600px] overflow-hidden`}>
                            <img src={image}
                                width="400"
                                height="400"
                                alt=""
                                className='w-full h-full absolute inset-0 object-cover group-hover:scale-105 transition duration-300'
                            />
                            {imageDescription != null && imageLink != null && (
                                <div className='w-full h-full text-blue'>
                                    <a href={imageLink} target="_blank" rel="nofollow external noopener noreferrer" className={imageLinkWrapperClasses}>
                                        <p href={imageLink} className="bg-white/80 hover:bg-white-darker/80 transition duration-300 z-10 w-full p-4 flex justify-between items-center text-sm">
                                            {imageDescription}
                                            <FontAwesomeIcon icon={faExternalLink}/>
                                        </p>
                                    </a>
                                </div>
                            )}
                        </div>
                )}

                <div>
                    <Text
                        title={title}
                        content={texts}
                    />
                </div>
            </div>
        </BlockWrapper>
    );
};

export default SplitImageText;
