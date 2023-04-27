import React from "react";

// Image on Left

function AboutUsLeft(props) {
    return(
        <div className="relative w-auto h-auto flex justify-around items-center border-x-2 border-slate-400">
            <div className="cursor-pointer  mx-4 drop-shadow-2xl ">
                {/* <img 
                    src={props.source} 
                    alt='Mauritius wedding.' 
                    className="rounded-lg" 
                /> */}
                <iframe className="rounded-lg"
                    width="672" 
                    height="378" 
                    src="https://www.youtube.com/embed/vUo9_iPpqWE" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            <div className="w-full mx-4 column content-between ">
                <h2 className="text-xxl text-right text-slate-100 mb-6">
                    {props.title}
                </h2>
                <p className="mb-6 text-xl text-left text-slate-100">
                    {props.heading}
                </p>
                <div className="">
                    <p className="font-light text-base text-left text-slate-200 mb-4">
                        {props.textOne}
                    </p>
                    <p className="font-light text-base text-left text-slate-200  mb-4">
                        {props.textTwo}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsLeft;