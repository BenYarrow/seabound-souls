import React from "react";
import FooterList from "./FooterList";

function Footer() {
    return(
        <div className="relative w-full border-t-2 border-slate-800">
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

