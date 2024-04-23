import React from 'react'
import BlockWrapper from './BlockWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';


const Image = ({
  image, 
  imageDescription, 
  imageLink, 
  container = false,
}) => {

  const imageLinkWrapperClasses = 'w-full h-full flex items-end justify-start group group-hover:underline'
  const imageDescriptionText = imageDescription ? imageDescription :  'Seabound Souls'
  const href = imageLink ? imageLink : 'https://www.instagram.com/seabound.souls/'

  return (
    <BlockWrapper container={container}>
      {image && (
        <div className="relative group w-full h-screen lg:h-[80vh] overflow-hidden">
            <img src={image}
                width="400"
                height="400"
                alt=""
                className='w-full h-full absolute inset-0 object-cover group-hover:scale-105 transition duration-300'
            />
            <div className='w-full text-blue'>
                <a href={href} target="_blank" rel="nofollow external noopener noreferrer" className={imageLinkWrapperClasses}>
                    <p href={imageLink} className="bg-white/80 hover:bg-white-darker/80 z-10 w-full p-4 flex justify-between items-center text-sm group">
                        {imageDescriptionText}
                        <FontAwesomeIcon icon={faExternalLink}/>
                    </p>
                </a>
            </div>
        </div>
      )}
    </BlockWrapper>
  )
}

export default Image