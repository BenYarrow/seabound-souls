import React from "react";

// Image on Right

function AboutUsRight(props) {
    return(
        <div className="relative w-auto h-auto flex flex-col items-center justify-center pb-8 lg:flex-row">
            <div className="w-4/6 lg:w-3/6 lg:order-last">
                <img src={props.source} alt='' className="rounded-lg"/>
            </div>
            <div className="w-full lg:w-4/6 lg:pr-8 pt-8 lg:pt-0 ">
                <h2 className="text-xl md:text-xxl text-center mb-8  ">
                    {props.title}
                </h2>
                <p className="text-base text-center mb-4">
                    {props.textOne}
                </p>
                <p className="text-base text-center mb-4">
                    {props.textTwo}
                </p>
                <p className="text-base text-center mb-4">
                    {props.textThree}
                </p>
                <p className="text-base text-center mb-4">
                    {props.textFour}
                </p>
                <p className="text-base text-center ">
                    {props.textFive}
                </p>
            </div>
        </div>
    )
}

export default AboutUsRight;