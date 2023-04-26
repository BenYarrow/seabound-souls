import React from "react";

// Image on Right

function AboutUsRight(props) {
    return(
        <div className="mx-8 w-auto h-auto flex justify-around items-center border-x-2 border-slate-800 my-20">
            <div className="w-full h-full mx-4 column content-between text-xxl text-left">
                <h2 className="mb-8">
                    {props.title}
                </h2>
                <p className="font-light text-base text-left mb-4">
                    {props.textOne}
                </p>
                <p className="font-light text-base text-left mb-4">
                    {props.textTwo}
                </p>
            </div>
            <div className="w-full mx-4 cursor-pointer drop-shadow-2xl">
                <img src={props.source} alt='Mauritius wedding.' className="rounded-lg"/>
            </div>
        </div>
    )
}

export default AboutUsRight;