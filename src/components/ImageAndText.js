import React from 'react'
import Image from './Image'
import Text from './Text'

const ImageAndText = ({
    image,
    imageDescription, 
    imageLink,
    title, 
    content,
    }) => {
  return (
    <div className='relative'>
        {image && (
            <Image image={image} imageDescription={imageDescription} imageLink={imageLink} />
        )}
        <div className='-translate-y-20 lg:-translate-y-40 container'>
            <div className='p-4 lg:p-8 bg-gradient-to-b from-white/80 to-white-darker via-white via-80% shadow-2xl shadow-white-darker lg:mx-16 border border-white-darker'>
                {content && (
                    <Text 
                        title={title ? title : null}
                        content={content}
                    />
                )}
            </div>

        </div>
    </div>
  )
}

export default ImageAndText