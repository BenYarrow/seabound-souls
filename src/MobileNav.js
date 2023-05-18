import React from 'react'
import './Css/MobileNav.css'
import { Link } from 'react-router-dom'
import MobileDestinations from './MobileDestinations'

const MobileNav = () => {
  return (
    <div id='mobile-nav' className='w-full bg-standard'>
        <ul className='w-full h-full flex flex-col justify-evenly items-center'>
            <Link to='/MobileDestinations' className='font-standard text-turquoise text-xxl'>Destinations</Link>
              
            <Link to='/OurWork' className='font-standard text-turquoise text-xxl'>Our Work</Link>
            <Link to='/ContactUs' className='font-standard text-turquoise text-xxl'>Contact Us</Link>
        </ul>
    </div>
  )
}

export default MobileNav