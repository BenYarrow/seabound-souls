import React from 'react';
import Dropdown from './DestinationDropdown';
import { Link } from 'react-router-dom';




function Navbar() {
    
    return(
    
<nav className='w-full h-auto flex justify-between items-center border-b-2 border-slate-400 py-4 '>
        <ul className='flex w-1/3 justify-around content-end sm:hidden'>
            <Dropdown>
                {(isHovered) => (
                <div>
                    <li className='text-slate-200 text-xl hover:underline hover:cursor-pointer font-light' >Destinations</li>
                        <ul className='absolute z-10 w-auto py-2'>
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-200 text-xl font-light  '>
                                <a href='/Mauritius'>
                                    Mauritius
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-200 text-xl font-light '>
                                <a href='/Canada'>
                                    Canada
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-200 text-xl font-light '>
                                <a href='/Greece'>
                                    Greece
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-200 text-xl font-light '>
                                <a href='/Uk'>
                                    UK
                                </a>
                            </li>}
                        </ul>
                </div>
                )}
            </Dropdown>
            <Link to='/Gallery' className='text-slate-200 text-xl hover:underline hover:cursor-pointer font-light'>Gallery</Link>
        </ul>
            
            <Link to='/Homepage' className=''>
                <div className='flex w-full justify-center sm:ml-4'>
                    <p className='text-slate-100 relative text-xxl font-light '>
                        Y
                    </p>
                    <p className='text-slate-100 relative text-xxl font-light '>
                        T
                    </p>
                </div>
                <div className='pb-4 sm:pb-0'>
                    <p className='font-light text-base text-slate-100 border-x-2 border-slate-400 px-5 sm:hidden'>
                        Y a r r o w T r a v e l s 
                    </p>
                </div>
            </Link>

        <ul className='flex w-1/3 justify-around sm:hidden'>
            <Link to='/Portfolio' className='text-slate-200 text-xl hover:underline hover:cursor-pointer font-light'>Portfolio</Link>
            <Link to='/ContactUs' className='text-slate-200 text-xl hover:underline hover:cursor-pointer font-light'>Contact Us</Link>
        </ul>


    </nav>        



    )
}

export default Navbar;