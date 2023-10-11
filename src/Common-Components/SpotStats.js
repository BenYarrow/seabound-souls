import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SpotStats = (props) => {



  return (
    <div className='w-1/4'>
        <div class="flex flex-col gap-2">
            <div className='flex justify-between items-center'>
                <p className='text-xl'>
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
            <div className='flex justify-between items-center'>
                <p className='text-xl'>
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
            <div className='flex justify-between items-center'>
                <p className='text-xl'>
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
  )
}

export default SpotStats