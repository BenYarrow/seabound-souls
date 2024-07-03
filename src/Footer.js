import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { siteData } from "./Data/site-data";
import BlockWrapper from "./components/BlockWrapper";
import { defaultProseClasses } from "./helpers/functions";

const Footer = () => {

    const afterClasses = 'relative after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-500'
    const instagramLink = siteData.socialMedia.map(data => data.link).filter(value => value.includes("instagram"));

    return (
        <footer>
            <BlockWrapper invert padded>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className={defaultProseClasses({ invert: true })}>
                        <div className="flex flex-col items-center">
                            <h2>
                                <a href="/contact-us" className="no-underline">
                                    Contact us
                                </a>
                            </h2>
                            
                            <p className="text-center">
                                Are you looking to book your next adventure and would like some advice? Or maybe you'd like to collaborate with us?
                                <a href="/contact-us" className="block text-center no-underline">
                                    Get in touch...
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2>
                                Email
                            </h2>

                            <a href={`mailto:${siteData.email}`} className={`${afterClasses} no-underline`}>
                                {siteData.email}
                            </a>
                        </div>

                        <div className="flex flex-col items-center mt-8">
                            <h2>
                                Get social
                            </h2>
                            
                            <ul className="flex items-center space-x-4 -translate-x-4">
                                {siteData.socialMedia.map((social, index) => (
                                    <li key={index} className="list-none">
                                        <a href={social.link} target="_blank" aria-label="Visit our social media" rel="nofollow external noopener noreferrer">
                                            <FontAwesomeIcon icon={social.icon} className='text-4xl'/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <a href={instagramLink} className="flex items-center justify-center" rel="nofollow external noopener noreferrer" target="_blank">
                        <img 
                            src={siteData.logo} 
                            alt="Seabound souls logo" 
                            className="w-1/2 md:w-full max-w-xs" 
                            width="350" 
                            height="350"
                            fetchpriority="low"
                            loading="lazy"
                            crossOrigin="true"
                        />
                    </a>
                </div>
            </BlockWrapper>
        </footer>
    )
};

export default Footer;

