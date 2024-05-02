import React from 'react'

interface EmbedYoutubeVideoProps {
    src: string
}

const EmbedYoutubeVideo = ({
    src,
}: EmbedYoutubeVideoProps) => {
  return (
    <div>
      <iframe
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        className="w-full h-[60vh] lg:h-[80vh]"
        
        ></iframe>

    </div>
  )
}

export default EmbedYoutubeVideo
