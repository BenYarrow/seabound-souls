import React from "react";

const StaticMasthead = ({
    image, 
    title, 
    subtitle,
}) => {
       
    return (
        <div className={`w-screen h-[60vh] lg:h-[80vh] relative overflow-hidden ${title && 'clipped-masthead'}`}>
            <picture>
                {image.sm && <source media="(max-width: 640px)" srcSet={image.sm} />}
                
                {image.md && <source media="(min-width: 641px) and (max-width: 1024px)" srcSet={image.md} />}
                {image.lg && <source media="(min-width: 1025px)" srcSet={image.lg} />}
                {image.sm && 
                    <img src={image.sm} 
                        alt={image.alt} 
                        className={`${image.customClasses ? image.customClasses : 'object-cover'} w-full h-full absolute`}
                        fetchpriority='high'
                        crossOrigin="true"
                    />
                }
            </picture>
            {title && (
                <div className="absolute w-full h-full flex justify-center items-center z-10 overflow-visible radial-background">
                    <div className="flex flex-col gap-y-4 text-white uppercase ">
                        <h1 className="text-4xl md:text-5xl text-center whitespace-nowrap font-bold">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-center whitespace-nowrap text-lg md:text-xl lg:text-2xl">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default StaticMasthead