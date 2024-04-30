import React from 'react'
import BlockWrapper from './BlockWrapper';

interface OverviewContentProps {
    index: number
    svg: string,
    title: string
    text: string
    svgClasses: string
}

const OverviewContent = ({
    index,
    svg,
    title,
    text,
    svgClasses
}: OverviewContentProps) => {
    
    return (
        <li key={index}>
            <div className={`flex items-center gap-x-4 `}>
                <img src={svg}
                    width="20"
                    height="20"
                    alt='Spot overview icon'
                    className={svgClasses}
                    fetchPriority="low"
                    loading="lazy"
                    crossOrigin="anonymous"
                />
                <p className="text-sm lg:text-xl font-bold whitespace-nowrap text-blue">
                    {title}: <span className='text-sm lg:text-xl font-normal md:block whitespace-normal text-black'>{text}</span>
                </p>
            </div>
        </li>
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

    const svgClasses = 'size-10 lg:size-16'

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
            
            <ul className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 lg:gap-12'>
                {spotItemData.slice(0, 3).map((data, index) => <OverviewContent {...data} index={index} svgClasses={svgClasses}/>)}
            </ul>
            <ul className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 lg:gap-12'>
                {spotItemData.slice(3, 6).map((data, index) => <OverviewContent {...data} index={index} svgClasses={svgClasses}/>)}
            </ul>
        </div>
    </BlockWrapper>
  )
}

export default SpotOverview