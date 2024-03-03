import React from "react";

const StaticMasthead = ({image}) => {
       
    return (
        <div className="w-screen h-[60vh] relative overflow-hidden">
            <picture>
                {image.sm && <source media="(max-width: 640px)" srcSet={image.sm} />}
                
                {image.md && <source media="(min-width: 641px) and (max-width: 1024px)" srcSet={image.md} />}
                {image.lg && <source media="(min-width: 1025px)" srcSet={image.lg} />}
                {image.sm && 
                    <img src={image.sm} 
                        alt={image.alt} 
                        className={`${image.customClasses ? image.customClasses : 'object-cover'} w-full h-full`}
                        fetchpriority='high'
                        crossOrigin="true"
                    />
                }
            </picture>
        </div>
    )
}

export default StaticMasthead