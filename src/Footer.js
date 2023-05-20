import React from "react";
import './Css/Footer.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return(
        <div id='footer' className="w-full h-[8rem] flex justify-between items-center px-8 lg:px-16 text-standard text-sm font-standard">
            <div className="w-full h-full flex justify-start">
                <ul className="h-full flex flex-col justify-evenly">
                    <li className="">
                        Website by Yarrow Travels
                    </li>
                    <li className="">
                        Developed with React
                    </li>
                    <li className="">
                        Styled with Tailwind CSS
                    </li>
                </ul>
            </div>
            <div className="w-full h-full flex justify-end text-xl ">
                <ul className="h-full flex flex-col justify-evenly ">
                    <li>
                        <a href='https://www.instagram.com/yarrowtravels/' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className='cursor-pointer'/>
                        </a>  
                    </li>
                    <li>
                        <a href="tel:+447309067164">
                            <FontAwesomeIcon icon={faPhone} className='cursor-pointer'/>
                        </a>
                    </li>
                    <li>
                        <Link to='./ContactUs'>
                            <FontAwesomeIcon icon={faEnvelope} className='cursor-pointer'/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;

