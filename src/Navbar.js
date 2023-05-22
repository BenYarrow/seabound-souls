import React from 'react';
import './Css/Navbar.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars , faXmark, faArrowAltCircleRight, faHome } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';





const Navbar = () => {


    const [navIsHidden, setNavIsHidden] = useState(true);

    const navMenuShow = () => {
        setNavIsHidden(false)
    };

    const navMenuHide = () => {
        setNavIsHidden(true)
    };


    return(
<div>
<nav id='navbar' className='w-full h-[8rem] flex justify-between items-center  py-4 '>
    <div className='w-3/6 h-full flex items-center  ml-8'>
        <Link to='/Homepage' className='' onClick={navMenuHide}>
            <img src='/Personal-Images/yarrow-travels-logo.png' className='w-4/6 md:w-3/6 lg:w-2/6' alt='Yarrow Travels Logo'/>
        </Link>
        <div className='absolute right-0'>
            {<FontAwesomeIcon icon={faBars} onClick={navMenuShow} className={navIsHidden === false ? 'hidden' : 'text-standard text-xxl flex sm:hidden mr-8'}/>}
            {<FontAwesomeIcon icon={faXmark} onClick={navMenuHide} className={navIsHidden === true ? 'hidden' : 'text-standard text-xxl flex sm:hidden mr-8'} />}
        </div>
    </div>
        <ul className='hidden sm:flex w-2/4 justify-around content-end mr-8'>
            <Link to='/Destinations' className='text-standard text-base md:text-xl hover:underline hover:cursor-pointer font-light'>Destinations</Link>
            <Link to='/OurWork' className='text-standard text-base md:text-xl hover:underline hover:cursor-pointer font-light'>Our Work</Link>
            <Link to='/ContactUs' className='text-standard text-base md:text-xl hover:underline hover:cursor-pointer font-light'>Contact Us</Link>
        </ul>        
                    

    </nav> 
    {navIsHidden === false &&  <div id='mobile-nav' className='w-full absolute top-[8rem] bg-standard/90 z-10 h-auto '>
                                    <ul className='w-full flex-col justify-evenly items-center py-4  px-8'>
                                        <Link to='/Homepage' onClick={navMenuHide} className='w-full flex justify-between items-center font-standard text-turquoise text-xxl pb-4 border-b-2 border-turquoise'>
                                            Home
                                            <FontAwesomeIcon icon={faHome} className='text-xl'/>
                                        </Link>
                                        <Link to='/Destinations' className='w-full h-auto flex justify-between items-center font-standard text-turquoise text-xxl py-4 border-b-2 border-turquoise' onClick={navMenuHide} >
                                            Destinations
                                            <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-xl'/>
                                        </Link>
                                        <Link to='/OurWork' className='w-full h-auto flex justify-between items-center font-standard text-turquoise text-xxl py-4 border-b-2 border-turquoise' onClick={navMenuHide}>
                                            Our Work
                                            <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-xl'/>
                                        </Link>
                                        <Link to='/ContactUs' className='w-full h-auto flex justify-between items-center font-standard text-turquoise text-xxl py-4 border-b-2 border-turquoise' onClick={navMenuHide}>
                                            Contact Us
                                            <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-xl'/>
                                        </Link>
                                    </ul>
                                </div>}
    </div>                        


    )
}

export default Navbar;
