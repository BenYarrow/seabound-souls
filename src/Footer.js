import React from "react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    const subheadingClasses = 'text-center text-4xl font-title uppercase'

    const socialLinks = [
        {
            title: 'Instagram',
            linkTo: 'https://www.instagram.com/seabound.souls/',
            icon: faInstagram,
        },
    ]

    return (
        <footer className="w-full h-screen md:h-auto md:py-20 bg-blue text-white">
            <div className="container mx-auto h-full flex flex-col justify-between py-20 md:py-0 md:grid md:grid-cols-2">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h3 className="font-title uppercase text-6xl">
                        Contact us
                    </h3>
                    <div>
                        <p className="text-center max-w-sm pb-2">
                            Have any questions, suggestions or want to collaborate?
                        </p>
                        <p className="text-center">
                            Get in touch...
                        </p>
                    </div>
                    <div>
                        <h4 className={subheadingClasses}>
                            Email
                        </h4>
                        <a href="mailto:yarrowtravels@outlook.com">
                            seaboundsouls@outlook.com
                        </a>
                    </div>
                    <div className="max-w-sm">
                        <h4 className={subheadingClasses}>
                            Get social
                        </h4>
                        <ul className="flex justify-center">
                            {socialLinks.map((link, index) => {
                                
                                const linkClasses = 'text-4xl text-white'

                                return (
                                    <li key={index}>
                                        <Link to={link.linkTo} target="_blank">
                                            <FontAwesomeIcon icon={link.icon} className={linkClasses}/>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>

                <div className="flex items-center justify-center">
                    <img src="/Personal-Images/logo.png" alt="Seabound souls logo" className="w-1/2 md:w-full max-w-md"/>

                </div>
            </div>

        </footer>
    )
};

export default Footer;

