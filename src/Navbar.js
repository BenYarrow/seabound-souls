import React from 'react';
import Dropdown from './NavbarComponents/DestinationDropdown';
import './Css/Navbar.css'
import { Link } from 'react-router-dom';



function Navbar() {
    
    return(
    
<nav id='navbar' className='w-full h-[8rem] flex justify-between items-center  py-4 '>
    <Link to='/Homepage' className='w-full sm:w-auto flex flex-col justify-center ml-8 text-standard '>
                <div className='flex w-full justify-center'>
                    <p className=' relative text-xxl font-light '>
                        Y
                    </p>
                    <p className=' relative text-xxl font-light '>
                        T
                    </p>
                </div>
                <div className='flex justify-center'>
                    <p className='sm:flex font-light  text-base border-x-2 border-standard px-2 '>
                        Y a r r o w T r a v e l s 
                    </p>
                </div>
            </Link>
        <ul className='hidden sm:flex w-3/6 justify-around content-end mr-8'>
            <Dropdown>
                {(isHovered) => (
                <div>
                    <li className='text-standard text-base md:text-xl hover:underline hover:cursor-pointer font-light'>Destinations</li>
                        <ul className='absolute z-10 w-auto py-2 bg-slate-200'>
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-xl font-light'>
                                <Link to='/Mauritius'>
                                    Mauritius
                                </Link>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-xl font-light'>
                                <a href='/Canada'>
                                    Canada
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-xl font-light'>
                                <Link to='/Egypt'>
                                    Egypt
                                </Link>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-xl font-light'>
                                <a href='/Greece'>
                                    Greece
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-xl font-light'>
                                <a href='/Uk'>
                                    UK
                                </a>
                            </li>}
                        </ul>
                </div>
                )}
            </Dropdown>
            <Link to='/OurWork' className='text-standard text-base md:text-xl hover:underline hover:cursor-pointer font-light'>Our Work</Link>
            <Link to='/ContactUs' className='text-standard text-base md:text-xl hover:underline hover:cursor-pointer font-light'>Contact Us</Link>
        </ul>        
                    

    </nav>        



    )
}

export default Navbar;