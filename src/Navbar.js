import React from 'react';
import Dropdown from './NavbarComponents/DestinationDropdown';
import './Css/Navbar.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars , faXmark } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';



function Navbar() {

    const [isHidden, setIsHidden] = useState(true)

    const handleShow = () => {
        setIsHidden(false)
    }

    const handleHide = () => {
        setIsHidden(true)
    }

    return(
    
<nav id='navbar' className='w-full h-[8rem] flex justify-between items-center  py-4 '>
    <div className='w-auto h-auto flex items-center justify-around ml-8'>
        <Link to='/Homepage' className='w-full sm:px-8 text-standard '>
            <div className='flex justify-center'>
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
        <div className='absolute right-0'>
            <Link to='/MobileNav' onClick={handleShow}>
                {<FontAwesomeIcon icon={faBars} className={isHidden === false ? 'hidden' : 'text-standard text-xxl flex sm:hidden mr-8'}/>}
            </Link>
            <Link to='/Homepage' onClick={handleHide}>
                {<FontAwesomeIcon icon={faXmark} className={isHidden === true ? 'hidden' : 'text-standard text-xxl flex sm:hidden mr-8'} />}
            </Link>
        </div>
    </div>

        

        <ul className='hidden sm:flex w-3/6 justify-around content-end mr-8'>
            <Dropdown>
                {(isHovered) => (
                <div>
                    <li className='text-standard text-base md:text-xl hover:underline  hover:cursor-pointer font-light'>Destinations</li>
                        <ul className='absolute z-10 md:w-[125px] w-[105px] bg-standard/90 '>
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <Link to='/Mauritius'>
                                    Mauritius
                                </Link>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <a href='/Canada'>
                                    Canada
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <Link to='/Egypt'>
                                    Egypt
                                </Link>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <a href='/Greece'>
                                    Greece
                                </a>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
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