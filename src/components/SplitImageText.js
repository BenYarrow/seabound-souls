import React from 'react';
import Text from '../components/Text'
import BlockWrapper from './BlockWrapper';

const SplitImageText = ({
    reverse = false, 
    image, 
    imageDescription = 'Seabound Souls', 
    imageLink = 'https://www.instagram.com/seabound.souls/', 
    title, 
    texts = []
}) => {

    const imageLinkWrapperClasses = 'group-hover:bg-white/60 absolute inset-0 flex items-center justify-center transition duration-300';
    return (
        <BlockWrapper>
            <div className={`${image ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'grid grid-cols-1'}  md:gap-12 lg:gap-20`}>
                {image && (
                    <div className={`${reverse ? 'order-last' : 'order-first'} relative group w-full h-80 md:h-96 bg-center bg-cover overflow-hidden`}>
                        <img src={image}
                            width="400"
                            height="400"
                            alt={`An image by ${imageDescription}`}
                            className='w-full h-full bg-center bg-cover group-hover:scale-105 transition duration-300'
                        />
                        <a href={imageLink} target="_blank" rel="noreferrer" className={imageLinkWrapperClasses}>
                            <p className="text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                                {imageDescription}
                            </p>
                        </a>
                    </div>
                )}

                <Text
                    title={title}
                    content={texts}
                />
            </div>
        </BlockWrapper>
    );
};

export default SplitImageText;
