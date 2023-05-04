import React from "react";

// Image on Left

function AboutUsLeft(props) {
    return(
        <div className="relative w-full h-auto flex flex-col items-center md:flex-row ">
            <div className="w-5/6 md:w-full h-full px-4 flex justify-center">
                <iframe className="rounded-lg flex-1 aspect-video  "
                    // width='560'
                    // height='315'
                    src="https://www.youtube.com/embed/vUo9_iPpqWE" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            <div className="px-4 w-full h-full">
                <p className="text-slate-200 text-xl py-2 ">
                    {props.heading}
                </p>
                <div className="text-slate-200 font-light text-base py-2">
                    <p className="">
                        {props.textOne}
                    </p>
                    <p className="text-slate-200 font-light text-base py-2">
                        {props.textTwo}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsLeft;