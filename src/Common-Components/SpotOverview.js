import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SpotOverview = (props) => {

  return (
    <div className='w-full'>

        <h2 className='text-3xl lg:text-5xl pb-4 lg:pb-8'>
            Overview
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-8'>
            <div className='grid grid-cols-6 grid-rows-5 pb-4 lg:pb-0'>
                <div className='w-full h-full flex items-center'>
                    <img src='svg/skill.svg'
                        width="50"
                        height="50"
                        className=""
                    />
                </div>
                <p className="col-span-5 col-start-2row-start-1 w-full font-bold flex items-center text-lg lg:text-2xl pl-4">
                    Ability level
                </p>
                <div className='col-start-2 row-start-2 row-span-5 flex flex-col pl-4 gap-4'>

                    <div className='col-start-2 col-span-3 flex flex-col gap-2'>
                        <p className='lg:text-xl'>
                            Beginner
                        </p>
                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faStar} className={`${props.b1 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.b2 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.b3 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.b4 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.b5 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                        </div>
                    </div>
                    <div className='col-start-2 col-span-3 flex flex-col gap-2'>
                        <p className='text-md lg:text-xl'>
                            Intermediate
                        </p>
                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faStar} className={`${props.i1 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.i2 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.i3 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.i4 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.i5 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                        </div>
                    </div>
                    <div className='col-start-2 col-span-3 flex flex-col gap-2'>
                        <p className='text-md lg:text-xl'>
                            Advanced
                        </p>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon icon={faStar} className={`${props.a1 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.a2 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.a3 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.a4 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                            <FontAwesomeIcon icon={faStar} className={`${props.a5 ? 'text-blue-lighter' : 'text-white-darker'}`}/>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:col-span-2 lg:gap-8">

                <div className='grid grid-cols-6 grid-rows-6'>
                    <div className='flex items-center'>
                        <img src='svg/sailing-style.svg'
                            width="50"
                            height="50"
                            className=''
                        />
                    </div>
                    <div className="w-full  h-full col-span-5 flex items-center pl-4">
                        <p className='text-lg lg:text-2xl font-bold'>
                            Sailing style
                        </p>
                    </div>
                    <p className='row-start-2 col-start-2 col-span-5 pl-4 text-md lg:text-xl'>
                        {props.sailingStyle}
                    </p>

                    <div className='flex items-center row-start-3'>
                        <img src='svg/best-time.svg'
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="w-full  h-full col-span-5 flex items-center pl-4">
                        <p className='text-base lg:text-2xl font-bold'>
                            Best conditions
                        </p>
                    </div>
                    <p className='row-start-4 col-start-2 col-span-5 pl-4 text-md lg:text-xl'>
                        {props.bestConditions}
                    </p>
                    <div className='flex items-center row-start-5'>
                        <img src='svg/wind-direction.svg'
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="w-full  h-full col-span-5 flex items-center pl-4">
                        <p className='text-base lg:text-2xl font-bold'>
                            Best wind direction
                        </p>
                    </div>
                    <p className='row-start-6 col-start-2 col-span-5 pl-4 text-md lg:text-xl'>
                        {props.bestDirection}
                    </p>
                </div>
                <div className='grid grid-cols-6 grid-rows-6'>
                    <div className='flex items-center'>
                        <img src='svg/wind-conditions.svg'
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="w-full  h-full col-span-5 flex items-center pl-4">
                        <p className='text-base lg:text-2xl font-bold'>
                            Wind conditions
                        </p>
                    </div>
                    <p className='row-start-2 col-start-2 col-span-5 pl-4 text-md lg:text-xl'>
                        {props.windConditions}
                    </p>
                    <div className='flex items-center row-start-3'>
                        <img src='svg/water.svg'
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="w-full  h-full col-span-5 flex items-center pl-4">
                        <p className='text-base lg:text-2xl font-bold'>
                            Water conditions
                        </p>
                    </div>
                    <p className='row-start-4 col-start-2 col-span-5 pl-4 text-md lg:text-xl'>
                        {props.waterConditions}
                    </p>
                    <div className='flex items-center row-start-5'>
                        <img src='svg/launch.png'
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="w-full  h-full col-span-5 flex items-center pl-4">
                        <p className='text-base lg:text-2xl font-bold'>
                            Launch zone
                        </p>
                    </div>
                    <p className='row-start-6 col-start-2 col-span-5 pl-4 text-md lg:text-xl'>
                        {props.launchZone}
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SpotOverview