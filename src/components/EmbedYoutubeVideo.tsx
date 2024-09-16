import React from 'react'

interface EmbedYoutubeVideoProps {
    src: string
}

const EmbedYoutubeVideo = ({
    src,
}: EmbedYoutubeVideoProps) => {
  return (
    <div className="relative">
        <iframe 
            id="ytplayer" 
            src={src}
            type="text/html" 
            width="720" 
            height="405"
            frameborder="0" 
            className="w-full h-[60vh] lg:h-[80vh]"
            allowfullscreen>
        </iframe>

    </div>
  )
}

export default EmbedYoutubeVideo
