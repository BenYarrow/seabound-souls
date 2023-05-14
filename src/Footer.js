import React from "react";
import FooterList from "./FooterComponents/FooterList";
import './Css/Footer.css'

function Footer() {
    return(
        <div id='footer' className="w-full h-20 absolute text-base flex items-center">
            <div className="flex justify-between content-center items-center">
                <ul className="list-none flex">
                    <FooterList title='Website by Benovate'/>
                    <FooterList title='React'/>
                    <FooterList title='Tailwind CSS'/>
                </ul>

                <ul className="list-none flex flex-end">
                    <FooterList title='Sign Up'/>
                </ul>
                </div>
        </div>
    )
};

export default Footer;

