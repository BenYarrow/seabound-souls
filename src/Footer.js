import React from "react";
import FooterList from "./FooterComponents/FooterList";
import './Css/Footer.css'

function Footer() {
    return(
        <div id='footer' className="w-full border-t-2 border-slate-400 text-sm ">
            <div className="flex justify-between h-16">
                <ul className="list-none flex">
                    <FooterList title='Website by Benovate'/>
                    <FooterList title='React'/>
                    <FooterList title='Tailwind CSS'/>
                </ul>

                <ul className="list-none flex ">
                    <FooterList title='Sign Up'/>
                </ul>
                </div>
        </div>
    )
};

export default Footer;

