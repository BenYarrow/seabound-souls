import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { siteData } from "./Data/site-data";
import BlockWrapper from "./components/BlockWrapper";

const Footer = () => {

    const subheadingClasses = 'text-center text-white text-4xl uppercase'

    const afterClasses = 'relative after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-500'
    const instagramLink = siteData.socialMedia.map(data => data.link).filter(value => value.includes("instagram"));

    return (
        <BlockWrapper invert >
            <footer>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center gap-4 lg:gap-8">
                        <h3 className="uppercase text-4xl text-center text-white">
                            Contact us
                        </h3>

                        <div className="flex flex-col justify-center">
                            <p className="text-center text-white pb-2">
                                Have any questions, suggestions or want to collaborate?
                            </p>
                            <p className="text-center text-white">
                                Get in touch...
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h4 className={subheadingClasses}>
                                Email
                            </h4>
                            <a href={`mailto:${siteData.email}`} className={`${afterClasses} text-white`}>
                                {siteData.email}
                            </a>
                        </div>

                        <div className="flex flex-col items-center space-y-2">
                            <h4 className={subheadingClasses}>
                                Get social
                            </h4>
                            <ul className="flex items-center space-x-4">
                                {siteData.socialMedia.map((social, index) => (
                                    <li key={index}>
                                        <a href={social.link} target="_blank">
                                            <FontAwesomeIcon icon={social.icon} className='text-4xl text-white'/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <a href={instagramLink} className="flex items-center justify-center" rel="noopener noreferrer" target="_blank">
                        <img 
                            src={siteData.logo} 
                            alt="Seabound souls logo" 
                            className="w-1/2 md:w-full max-w-xs" 
                            width="350" 
                            height="350"
                            fetchpriority="low"
                            loading="lazy"
                            crossOrigin
                        />
                    </a>
                </div>
            </footer>
        </BlockWrapper>
    )
};

export default Footer;

