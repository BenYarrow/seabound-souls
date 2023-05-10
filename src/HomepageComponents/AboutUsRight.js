import React from "react";

// Image on Right

function AboutUsRight(props) {
    return(
        <div className="relative w-full h-auto flex flex-col items-center md:flex-row ">
            <div className="px-4 w-full h-full pb-4 ">
                <h2 className="mb-4 text-xl pb-4">
                    {props.title}
                </h2>
                <p className="font-light text-base text-left font-standard pb-2 ">
                    {props.textOne}
                </p>
                <p className="font-light text-base text-left font-standard pb-2">
                    {props.textTwo}
                </p>
            </div>
            <div className="w-5/6 md:w-full h-auto px-4 -order-1 md:order-last pb-4">
                <img src={props.source} alt='' className="rounded-lg"/>
            </div>
        </div>
    )
}

export default AboutUsRight;