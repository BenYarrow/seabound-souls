import React from 'react';
import Text from './Text'
import BlockWrapper from './BlockWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

interface SplitImageTextProps {
    reverse?: boolean
    image: {
        src: string
        alt?: string
    }
    imageDescription?: string
    imageLink?: string
    title: string
    content: string
}

const SplitImageText = ({
    reverse = false, 
    image, 
    imageDescription = 'Seabound Souls', 
    imageLink = 'https://www.instagram.com/seabound.souls/', 
    title,
    content
}: SplitImageTextProps) => {

    const imageLinkWrapperClasses = 'absolute bottom-0 w-full h-full flex items-end justify-start group-    hover:underline transition duration-300'

    return (
        <BlockWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <Text
                    title={title}
                    content={content}
                />
                
                {image && (
                    <div className={`${reverse ? 'lg:order-last' : 'lg:order-first'} relative group w-full h-80 md:h-96 lg:h-[600px] overflow-hidden`}>
                        <img src={image.src}
                            width="400"
                            height="400"
                            alt={image.alt ?? null}
                            className='w-full h-full aspect-square object-cover group-hover:scale-105 transition duration-300'
                        />
                        {imageDescription && imageLink && (
                            <a href={imageLink} target="_blank" rel="nofollow external noopener noreferrer" className={imageLinkWrapperClasses}>
                                <p className="bg-white/80 hover:bg-white-darker/80 transition duration-300 z-10 w-full p-4 flex justify-between items-center text-sm">
                                    {imageDescription}
                                    <FontAwesomeIcon icon={faExternalLink}/>
                                </p>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </BlockWrapper>
    );
};

export default SplitImageText;
