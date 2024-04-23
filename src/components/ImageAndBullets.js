import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import Text from './Text'
import Image from './Image';

const ImageAndBullets = ({
    image,
    imageDescription,
    imageLink,
    title, 
    intro,
    bullets,
}) => {
  return (
    <div className='relative'>
        {image && (
            <Image image={image} imageDescription={imageDescription} imageLink={imageLink}/>
        )}
        <div className='-translate-y-20 lg:-translate-y-40 container mx-auto'>
            <div className='p-4 lg:p-8 bg-gradient-to-b from-white/80 to-white-darker via-white via-80% shadow-2xl shadow-white-darker'>
                <div className='flex flex-col space-y-2'>
                    {title && (
                        <Text title={title} content={intro && intro}/>
                    )}
                    <ul className="pl-12 flex flex-col space-y-2">
                        {bullets.map((list, index) => {
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageAndBullets