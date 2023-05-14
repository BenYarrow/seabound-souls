import React from "react";

// Image on Right

function AboutUsRight(props) {
    return(
        <div className="relative w-full h-auto flex flex-col items-center md:flex-row ">
            <div className="px-4 w-full h-full pb-4 ">
                <h2 className="text-xl pb-8">
                    {props.title}
                </h2>
                <p className="text-base text-left pb-4 ">
                    {props.textOne}
                </p>
                <p className="text-base text-left pb-4">
                    {props.textTwo}
                </p>
            </div>
            <div className="w-5/6 md:w-3/6 h-auto px-4 -order-1 md:order-last py-8">
                <img src={props.source} alt='' className="rounded-lg"/>
            </div>
        </div>
    )
}

export default AboutUsRight;