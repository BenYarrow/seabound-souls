import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import BlockWrapper from './BlockWrapper';
import { svg } from 'leaflet';


const DetailItem = ({
    index,
    svg,
    title,
    text,
    svgClasses
}) => {
    
    return (
        <li key={index}>
            <div className='flex items-center gap-x-4'>
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

  return (
    <BlockWrapper > 
        <div className='flex flex-col gap-y-8'>
            <h2 className='text-2xl md:text-3xl font-bold'>
                Overview
            </h2>
            <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-4'>
                    <img src='/svg/skill.svg'
                        width="20"
                        height="20"
                        alt=""
                        className={svgClasses}
                    />
                    <p className="lg:text-md font-bold whitespace-nowrap">
                        Ability level
                    </p>
                </div>
                <div className='flex justify-between md:grid-cols-3 gap-4 lg:gap-8'>
                    <div className='flex flex-col gap-y-1 lg:gap-y-2'>
                        <p className='text-sm lg:text-xl text-left'>
                            Beginner
                        </p>
                        <div className="flex gap-x-1">
                            <FontAwesomeIcon icon={faStar} className={`${props.b1 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.b2 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.b3 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.b4 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.b5 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1 lg:gap-y-2'>
                        <p className='text-sm lg:text-xl text-left'>
                            Intermediate
                        </p>
                        <div className="flex gap-x-1">
                            <FontAwesomeIcon icon={faStar} className={`${props.i1 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.i2 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.i3 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.i4 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.i5 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1 lg:gap-y-2 '>
                        <p className='text-sm lg:text-xl text-left'>
                            Advanced
                        </p>
                        <div className='flex gap-x-1'>
                            <FontAwesomeIcon icon={faStar} className={`${props.a1 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.a2 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.a3 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.a4 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.a5 ? 'text-blue-lighter' : 'text-white-darker'} text-sm lg:text-base`}/>
                        </div>
                    </div>
                </div>
            </div>

            <ul className='grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-12'>
                {spotItemData.map((data, index) => <DetailItem {...data} index={index} svgClasses={svgClasses}/>)}
            </ul>

        </div>
    </BlockWrapper>
  )
}

export default SpotOverview