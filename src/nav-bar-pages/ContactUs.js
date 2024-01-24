import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, } from "@fortawesome/free-solid-svg-icons"
import { faSquareInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";
import StaticMasthead from "../components/StaticMasthead";
import PageHeading from "../components/PageHeading";

const ContactUs = () => {
  
  const mastheadImage = 'images/mastheads/homepage/wedding-01.jpg'

  return (
  
    <div className="">
      <StaticMasthead imageSrc={mastheadImage} backgroundPosition='bg-right-bottom'/>
      <div className="container mx-auto w-full flex flex-col justify-center">
        <PageHeading heading='Contact us' />

        <div className="w-full py-12 flex flex-col items-center space-y-8">
          <p className="max-w-3xl text-center ">
            If you represent a brand that aligns with our values and shares our commitment to environmental conservation and mental health advocacy, we would love to explore collaboration opportunities. 
          </p>
          <p className="max-w-3xl text-center ">
            Let's work together to make a positive impact while embarking on exciting adventures! Feel free to <a href="mailto:seabound.souls@outlook.com" className="font-bold border-b-[1px] border-blue">reach out</a>, and let's create waves of change together. 
          </p>
        </div>
      </div>

    </div>
      
  );
};

export default ContactUs;