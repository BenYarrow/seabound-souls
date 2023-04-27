import React from "react";

// Image on Left

function AboutUsLeft(props) {
    return(
        <div className="mx-8 w-auto h-auto flex justify-around items-center border-x-2 border-slate-800 mb-40">
            <div className="cursor-pointer  mx-4 drop-shadow-2xl ">
                <img 
                    src={props.source} 
                    alt='Mauritius wedding.' 
                    className="rounded-lg" 
                />
            
            </div>
            <div className="w-full mx-4 column content-between text-xxl text-right">
                <h2 className="mb-6">
                    {props.title}
                </h2>
                <p className="mb-6 text-xl text-left">
                    {props.heading}
                </p>
                <p className="font-light text-base text-left mb-4">
                    {props.textOne}
                </p>
                <p className="font-light text-base text-left mb-4">
                    {props.textTwo}
                </p>
            </div>
        </div>
    )
}

export default AboutUsLeft;