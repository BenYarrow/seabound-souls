import React from 'react';
import Dropdown from './DestinationDropdown';
import { Link } from 'react-router-dom';




function Navbar() {
    
    return(
    
<nav className='w-full h-auto flex justify-between items-center border-b-2 border-slate-400 pt-4'>
        <ul className='flex w-1/3 h-full justify-around content-end '>
            <Dropdown>
                {(isHovered) => (
                <>
                    <li className='text-slate-200 text-xl hover:underline hover:cursor-pointer  font-light' onMouseEnter={''}>Destinations</li>
                        <ul className='absolute z-10'>
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-200 text-xl font-light bg-white '>
                                <a href='/Mauritius'>
                                    Mauritius
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-200 text-xl font-light bg-white'>
                                <a href='/Canada'>
                                    Canada
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-200 text-xl font-light bg-white'>
                                <a href='/Greece'>
                                    Greece
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-200 text-xl font-light bg-white'>
                                <a href='/Uk'>
                                    UK
                                </a>
                            </li>}
                        </ul>
                </>
                )}
            </Dropdown>
            <Link to='/Gallery' className='text-slate-200 text-xl hover:underline hover:cursor-pointer font-light'>Gallery</Link>
        </ul>
            
            <Link to='/Homepage' className=''>
                <div className='flex w-full justify-center '>
                    <p className='text-slate-100 relative text-xxl font-light '>
                        Y
                    </p>
                    <p className='text-slate-100 relative text-xxl font-light'>
                        T
                    </p>
                </div>
                <div className='pb-4'>
                    <p className='font-light text-base text-slate-100 border-x-2 border-slate-400 px-5'>
                        Y a r r o w T r a v e l s 
                    </p>
                </div>
            </Link>

        <ul className='flex w-1/3 justify-around'>
            <Link to='/Portfolio' className='text-slate-200 text-xl hover:underline hover:cursor-pointer font-light'>Portfolio</Link>
            <Link to='/ContactUs' className='text-slate-200 text-xl hover:underline hover:cursor-pointer font-light'>Contact Us</Link>
        </ul>


    </nav>        



    )
}

export default Navbar;