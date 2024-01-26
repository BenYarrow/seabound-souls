import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { siteData } from "./Data/site-data";
import BlockWrapper from "./components/BlockWrapper";

const Footer = () => {

    const subheadingClasses = 'text-center text-white text-4xl uppercase'

    const afterClasses = 'relative after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-500'

    return (
        <footer>
            <BlockWrapper invert>
                <div className="h-full flex flex-col justify-between md:grid md:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-8">
                        <h3 className="uppercase text-6xl text-center text-white">
                            Contact us
                        </h3>

                        <div className="flex flex-col justify-center">
                            <p className="text-center text-white max-w-sm pb-2">
                                Have any questions, suggestions or want to collaborate?
                            </p>
                            <p className="text-center text-white">
                                Get in touch...
                            </p>
                        </div>

                        <div>
                            <h4 className={subheadingClasses}>
                                Email
                            </h4>
                            <a href={`mailto:${siteData.email}`} className={afterClasses}>
                                {siteData.email}
                            </a>
                        </div>

                        <div className="max-w-sm flex flex-col justify-center space-y-2">
                            <h4 className={subheadingClasses}>
                                Get social
                            </h4>
                            <ul className="flex justify-center items-center space-x-4">
                                {siteData.socialMedia.map((social, index) => (
                                    <li key={index}>
                                        <a href={social.link} target="_blank">
                                            <FontAwesomeIcon icon={social.icon} className=' w-2 h-2 text-4xl text-white'/>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <div className="flex items-center justify-center">
                        <img 
                            src={siteData.logo} 
                            alt="Seabound souls logo" 
                            className="w-1/2 md:w-full max-w-md" 
                            width="350" 
                            height="350"
                            fetchpriority="low"
                            loading="lazy"
                            crossOrigin
                        />
                    </div>
                </div>
            </BlockWrapper>
        </footer>
    )
};

export default Footer;

