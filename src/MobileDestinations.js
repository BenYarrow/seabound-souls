import React from 'react'
import {Link} from 'react-router-dom'

const MobileDestinations = () => {
  return (
    <div id='mobile-nav' className='w-full bg-standard'>
    <ul className='w-full h-full flex flex-col justify-evenly items-center'>
        <Link to='/Mauritius' className='font-standard text-turquoise text-xxl'>
            Mauritius
        </Link>
        <Link to='/Canada' className='font-standard text-turquoise text-xxl'>
            Canada
        </Link>
        <Link to='/Egypt' className='font-standard text-turquoise text-xxl'>
            Egypt
        </Link>
        <Link to='/Uk' className='font-standard text-turquoise text-xxl'>
            Uk
        </Link>
    </ul>
</div>
  )
}

export default MobileDestinations