import React from 'react';
import Dropdown from './DestinationDropdown';
import NavItem from './NavItem';


function Navbar() {
    
    return(
    
    <nav className='w-auto h-auto flex justify-between items-center border-b-2 border-slate-800 mx-8 pt-4 '>
        <ul className='flex w-1/3 h-full justify-around content-end'>
            <Dropdown>
                {(isHovered) => (
                <>
                    <NavItem title='Destinations' onMouseEnter={''}/>
                        <ul className='absolute z-10'>
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-600 text-xl font-light bg-white '>
                                <a href='src/Mauritius.js'>
                                    Mauritius
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-600 text-xl font-light bg-white'>
                                <a href='./Canada.js'>
                                    Canada
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-600 text-xl font-light bg-white'>
                                <a href='./Greece.js'>
                                    Greece
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-600 text-xl font-light bg-white'>
                                <a href='./Uk.js'>
                                    UK
                                </a>
                            </li>}
                        </ul>
                </>
                )}
            </Dropdown>
            <NavItem title='Gallery' to='Gallery.js'/>
        </ul>
            
            <div className=''>
                <div className='flex w-full justify-center'>
                    <p className='relative text-xxl font-light '>
                        Y
                    </p>
                    <p className='relative text-xxl font-light'>
                        T
                    </p>
                </div>
                 <div className='pb-4'>
                    <p className='font-light text-base border-x-2 border-slate-800 px-5'>
                        Y a r r o w T r a v e l s 
                    </p>
                </div>
            </div>

        <ul className='flex w-1/3 justify-around'>
            <NavItem title='Portfolio' to='Portfolio.js'/>
            <NavItem title='Contact Us' to='ContactUs.js'/>
        </ul>
    </nav>        

    )
}

export default Navbar;