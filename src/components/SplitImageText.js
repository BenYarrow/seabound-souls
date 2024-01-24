import React from 'react';

const SplitImageText = (props) => {
    const { reverse = false, image, imageDescription = 'Seabound Souls', imageLink = 'https://www.instagram.com/seabound.souls/', title, texts = [] } = props;

    const imageLinkWrapperClasses = 'group-hover:bg-white/60 w-full h-full flex items-center justify-center transition duration-300';
    console.log(imageLink)
    return (
        <div className={`${image ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'grid grid-cols-1'}  md:gap-12 lg:gap-20`}>
            {image && (
                <div className={`${reverse ? 'order-last' : 'order-first'} group w-full h-80 md:h-96 bg-center bg-cover overflow-hidden`}>
                    <div
                        className='w-full h-full bg-center bg-cover hover:scale-105 transition duration-300'
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <a href={imageLink} target="_blank" rel="noreferrer" className={imageLinkWrapperClasses}>
                            <p className="text-4xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                                {imageDescription}
                            </p>
                        </a>
                    </div>
                </div>
            )}

            <div className='flex flex-col space-y-4 lg:space-y-8 w-full'>
                {title && <h4 className='text-left text-2xl lg:text-3xl font-bold uppercase'>{title}</h4>}
                
                {texts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </div>
    );
};

export default SplitImageText;
