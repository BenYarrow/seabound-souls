import React from "react";

// Image on Left

function AboutUsLeft(props) {
    return(
        <div className="relative w-auto h-auto flex flex-col items-center justify-center py-16 lg:flex-row">
            <div className="w-4/6 lg:w-2/6 ">
                <img src={props.source} alt='' className="rounded-lg"/>
            </div>
            <div className="w-full h-full lg:w-4/6 lg:pl-8  text-center lg:text-left ">
                <h2 className='text-xxl pb-4 '>
                    {props.heading}      
                </h2>
                <h2 className="text-xl md:text-xl mb-8  ">
                    {props.title}
                </h2>
                <p className="text-base pb-4">
                    {props.textOne}
                </p>
                <p className="text-base pb-4">
                    {props.textTwo}
                </p>
                <p className="text-base pb-4">
                    {props.textThree}
                </p>
                <p className="text-base pb-4">
                    {props.textFour}
                </p>
                <p className="text-base ">
                    {props.textFive}
                </p>
            </div>
        </div>
    )
}

export default AboutUsLeft;