import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, } from "@fortawesome/free-solid-svg-icons"
import { faSquareInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";
import StaticMasthead from "../Common-Components/StaticMasthead";
import PageHeading from "../Common-Components/PageHeading";


const ContactUs = () => {
  
  const masthead = 'images/mastheads/homepage/fuerteventura-beach-01.jpg'
  
  const socialLinks = [
    {
        title: 'Instagram',
        linkTo: 'https://www.instagram.com/seabound.souls/',
        icon: faSquareInstagram,
    },
    {
        title: 'TikTok',
        linkTo: 'https://www.tiktok.com/@seabound.souls?is_from_webapp=1&sender_device=pc',
        icon: faTiktok
    }
]

const afterClasses = 'relative uppercase after:absolute after:bottom-0 after:right-0 after:h-[3px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-blue after:transition-all after:duration-500'
  
  return (
  
  <div>
      
      <StaticMasthead imageSrc={masthead} />

      <div className="container mx-auto">

        <PageHeading heading='Contact us' />
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-20">
            <div className="flex flex-col space-y-8">

              <div className="flex space-x-4 items-center text-4xl ">
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
                <a href="mailto:yarrowtravels@outlook.com" className={afterClasses}>
                    seaboundsouls@outlook
                </a>
              </div>

              <div className="flex space-x-4 items-center text-4xl">
                <FontAwesomeIcon icon={faPhone} className="text-4xl" />
                <a href="tel:07309077164" className={afterClasses}>
                    07309067164
                </a>
              </div>

              <div className="flex space-x-4  text-4xl">
                <p>
                  Reach out on socials!
                </p>
                <ul className="flex space-x-12">
                    {socialLinks.map((link, index) => {
                        const linkClasses = 'text-4xl blue'
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

          </div>
        </div>
      </div>
      
  );
};

export default ContactUs;
