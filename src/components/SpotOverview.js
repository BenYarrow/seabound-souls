import React from 'react'
import BlockWrapper from './BlockWrapper';

const DetailItem = ({
    index,
    svg,
    title,
    text,
    svgClasses
}) => {
    
    return (
        <li key={index}>
            <div className={`flex items-center gap-x-4 `}>
                <img src={svg}
                    width="20"
                    height="20"
                    alt=''
                    className={svgClasses}
                    fetchpriority="low"
                    loading="lazy"
                    crossOrigin="true"
                />
                <p className="text-sm lg:text-xl font-bold whitespace-nowrap">
                    {title}: <span className='text-sm lg:text-xl font-normal md:block whitespace-normal'>{text}</span>
                </p>
            </div>
        </li>
    )
}

const SpotOverview = (props) => {

    const svgClasses = 'size-10 lg:size-16'

    const spotItemData = [
        {
            svg:  '/svg/sailing-style.svg',
            title: 'Sailing style',
            text: props.sailingStyle,
        },
        {
            svg:  '/svg/best-time.svg',
            title: 'Best time',
            text: props.bestConditions,
        },
        {
            svg:  '/svg/wind-direction.svg',
            title: 'Best direction',
            text: props.bestDirection,
        },
        {
            svg:  '/svg/wind-conditions.svg',
            title: 'Wind conditions',
            text: props.windConditions,
        },
        {
            svg:  '/svg/water.svg',
            title: 'Water Conditions',
            text: props.waterConditions,
        },
        {
            svg:  '/svg/launch.png',
            title: 'Launch zone',
            text: props.launchZone,
        },
    ]

    console.log(spotItemData.length)
  return (
    <BlockWrapper > 
        <div className='flex flex-col gap-y-8'>
            <h2 className='text-2xl md:text-3xl font-bold'>
                Overview
            </h2>
            
            <ul className='grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-12'>
                {spotItemData.slice(0, 3).map((data, index) => <DetailItem {...data} index={index} svgClasses={svgClasses}/>)}
            </ul>
            <ul className='grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-12'>
                {spotItemData.slice(3, 6).map((data, index) => <DetailItem {...data} index={index} svgClasses={svgClasses}/>)}
            </ul>
        </div>
    </BlockWrapper>
  )
}

export default SpotOverview