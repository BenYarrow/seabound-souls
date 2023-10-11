import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SpotOverview = (props) => {



  return (
    <div className='w-full'>
        <h3 className='text-3xl pb-6'>
            Overview
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div class="w-full flex flex-col gap-4">
                <div className='grid grid-cols-6'>
                    <img src='svg/skill.svg'
                        width="50"
                        height="50"
                    />
                    <p class="col-span-5 font-bold flex items-center">
                        Ability Level
                    </p>
                    <div className='col-start-2 col-span-5 flex justify-between items-center'>
                        <p className='text-xl '>
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
                    <div className='col-start-2 col-span-5 flex justify-between items-center'>
                        <p className='text-xl '>
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
                    <div className='col-start-2 col-span-5 flex justify-between items-center'>
                        <p className='text-xl '>
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
                <div className='grid grid-cols-6'>
                    <img src="svg/discipline.svg"
                        width="50"
                        height="50"
                    />
                    <div className='col-start-2 col-span-5 flex items-center'>
                        <p className='text-xl font-bold'>
                            Discipline
                        </p>
                    </div>
                    <div className='col-start-2 col-span-5 flex justify-between items-center'>
                        {props.discipline}
                    </div>
                </div>

            </div>
            <div class="w-full flex flex-col gap-4">
                <div className='grid grid-cols-6'>  
                    <img src="svg/best-time.svg"
                        width="50"
                        height="50"
                    />
                    <div className='col-start-2 col-span-5 flex items-center justify-between'>
                        <p class="font-bold">
                            Best conditions
                        </p>
                        <p>
                            {props.bestTime}
                        </p>
                    </div>
                    <div className='col-start-2 col-span-5 flex items-center justify-between'>
                        <p class="font-bold">
                            Best wind direction
                        </p>
                        <p>
                            {props.bestDirection}
                        </p>
                    </div>
                    <div className='col-start-2 col-span-5 flex items-center justify-between'>
                        <p class="font-bold">
                            Wind conditions
                        </p>
                        <p>
                            {props.windConditions}
                        </p>
                    </div>
                    <div className='col-start-2 col-span-5 flex items-center justify-between'>
                        <p class="font-bold">
                            Water conditions
                        </p>
                        <p>
                            {props.waterConditions}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SpotOverview