import React from 'react';
import Dropdown from './NavbarComponents/DestinationDropdown';
import './Css/Navbar.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars , faXmark, faArrowAltCircleDown, faArrowAltCircleRight, faArrowAltCircleUp, faHome } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';




const Navbar = () => {


    const [navIsHidden, setNavIsHidden] = useState(true)

    const navMenuShow = () => {
        setNavIsHidden(false)
    }

    const navMenuHide = () => {
        setNavIsHidden(true)
    }


    const [destNavIsHidden, setDestNavIsHidden] = useState(true)

    const destNavShow = () => {
        setDestNavIsHidden(!destNavIsHidden)
    }
    const hideAllNav = () => {
        setNavIsHidden(true)
        setDestNavIsHidden(true)
    }


    return(
<div>
<nav id='navbar' className='w-full h-[8rem] flex justify-between items-center  py-4 '>
    <div className='w-auto h-auto flex items-center justify-around ml-8'>
        <Link to='/Homepage' className='w-full sm:px-8 text-standard' onClick={hideAllNav}>
            <div className='flex justify-center'>
                <p className='relative text-xxl font-light '>
                    Y
                </p>
                <p className='relative text-xxl font-light '>
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
            {<FontAwesomeIcon icon={faBars} onClick={navMenuShow} className={navIsHidden === false ? 'hidden' : 'text-standard text-xxl flex sm:hidden mr-8'}/>}
            {<FontAwesomeIcon icon={faXmark} onClick={navMenuHide} className={navIsHidden === true ? 'hidden' : 'text-standard text-xxl flex sm:hidden mr-8'} />}
        </div>
    </div>
        <ul className='hidden sm:flex w-3/6 justify-around content-end mr-8'>
            <Dropdown>
                {(isHovered) => (
                <div>
                    <li className='text-standard text-base md:text-xl hover:underline  hover:cursor-pointer font-light'>
                        Destinations
                    </li>
                        <ul className='absolute z-10 md:w-[125px] w-[105px] bg-standard/90 '>
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <Link to='/Mauritius'>
                                    Mauritius
                                </Link>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <Link to='/Canada'>
                                    Canada
                                </Link>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <Link to='/Egypt'>
                                    Egypt
                                </Link>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <Link to='/Greece'>
                                    Greece
                                </Link>
                            </li>}
                            {isHovered && <li className='hover:underline hover:cursor-pointer hover:bg-turquoise hover:text-standard text-center py-4 text-xl font-light text-turquoise'>
                                <Link to='/Uk'>
                                    UK
                                </Link>
                            </li>}
                        </ul>
                </div>
                )}
            </Dropdown>
            <Link to='/OurWork' className='text-standard text-base md:text-xl hover:underline hover:cursor-pointer font-light'>Our Work</Link>
            <Link to='/ContactUs' className='text-standard text-base md:text-xl hover:underline hover:cursor-pointer font-light'>Contact Us</Link>
        </ul>        
                    

    </nav> 
    {navIsHidden === false &&  <div id='mobile-nav' className='w-full absolute top-[8rem] bg-standard/90 z-10 h-auto '>
                                    <ul className='w-full flex-col justify-evenly items-center py-4  px-8'>
                                        <Link to='/Homepage' onClick={hideAllNav} className='w-full flex justify-between items-center font-standard text-turquoise text-xxl pb-4 border-b-2 border-turquoise'>
                                            Home
                                            <FontAwesomeIcon icon={faHome} className='text-xl'/>
                                        </Link>
                                        <p className='w-full flex justify-between items-center font-standard text-turquoise text-xxl py-4 border-b-2 border-turquoise' onClick={destNavShow} >
                                            Destinations
                                            {destNavIsHidden === true ? <FontAwesomeIcon icon={faArrowAltCircleDown}className='text-xl'/> : <FontAwesomeIcon icon={faArrowAltCircleUp} className='text-xl'/> }
                                        </p>
                                            {destNavIsHidden === false && <div  className='w-full'>
                                                <ul className='w-full  flex flex-col'>
                                                    <Link to='/Mauritius' className='flex justify-between font-standard text-turquoise text-xl py-2' onClick={hideAllNav}>
                                                        Mauritius  
                                                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-base'/> 
                                                    </Link>
                                                    <Link to='/Canada' className='flex justify-between font-standard text-turquoise text-xl py-2' onClick={hideAllNav}>
                                                        Canada
                                                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-base'/> 
                                                    </Link>
                                                    <Link to='/Egypt' className='flex justify-between font-standard text-turquoise text-xl py-2' onClick={hideAllNav}>
                                                        Egypt
                                                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-base'/> 
                                                    </Link>
                                                    <Link to='/Uk' className='flex justify-between font-standard text-turquoise text-xl py-2' onClick={hideAllNav}>
                                                        Uk
                                                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-base'/> 
                                                    </Link>
                                                </ul>
                                            </div>}
                                            <Link to='/OurWork' className='w-full h-auto flex justify-between items-center font-standard text-turquoise text-xxl py-4 border-b-2 border-turquoise' onClick={hideAllNav}>
                                                Our Work
                                                <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-xl'/>
                                            </Link>
                                            <Link to='/ContactUs' className='w-full h-auto flex justify-between items-center font-standard text-turquoise text-xxl py-4 border-b-2 border-turquoise' onClick={hideAllNav}>
                                                Contact Us
                                                <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-xl'/>
                                            </Link>
                                    </ul>
                                </div>}
    </div>                        


    )
}

export default Navbar;
