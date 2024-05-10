import React from 'react'
import BlockWrapper from './BlockWrapper';

interface OverviewContentProps {
    svg: string,
    title: string
    text: string
}

const OverviewContent = ({
    svg,
    title,
    text,
}: OverviewContentProps) => {
    
    return (
        <div className={`flex items-center space-x-4 `}>
            <img src={svg}
                width="40"
                height="40"
                alt='Spot overview icon'
                className=''
                suppressHydrationWarning
                loading="lazy"
                crossOrigin="anonymous"
            />
            <p className="font-bold whitespace-nowrap text-blue">
                {title}: <span className='text-sm md:block whitespace-normal text-black'>{text}</span>
            </p>
        </div>
    )
}

interface SailingOverviewProps {
    sailingStyle: string
    bestConditions: string
    bestDirection: string
    windConditions: string
    waterConditions: string
    launchZone: string
}

const SpotOverview = ({
    sailingStyle,
    bestConditions,
    bestDirection, 
    windConditions,
    waterConditions,
    launchZone,
}: SailingOverviewProps) => {


    const spotItemData = [
        {
            svg:  '/svg/sailing-style.svg',
            title: 'Sailing style',
            text: sailingStyle,
        },
        {
            svg:  '/svg/best-time.svg',
            title: 'Best time',
            text: bestConditions,
        },
        {
            svg:  '/svg/wind-direction.svg',
            title: 'Best direction',
            text: bestDirection,
        },
        {
            svg:  '/svg/wind-conditions.svg',
            title: 'Wind conditions',
            text: windConditions,
        },
        {
            svg:  '/svg/water.svg',
            title: 'Water Conditions',
            text: waterConditions,
        },
        {
            svg:  '/svg/launch.png',
            title: 'Launch zone',
            text: launchZone,
        },
    ]

  return (
    <BlockWrapper > 
        <div className='flex flex-col gap-y-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-blue'>
                Overview
            </h2>
            
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 lg:gap-12'>
                {spotItemData.map((data, index: number) => 
                    <li key={index}>
                        <OverviewContent {...data}/>
                    </li>
                )}
            </ul>
            
        </div>
    </BlockWrapper>
  )
}

export default SpotOverview