import React from "react";

const PageHeadingWithImage = (props) => {
       
    return (
        <div className="">
            <img 
                src={props.imageSrc}
                width=""
                height=""
                className="-z-10 w-full h-60 object-cover"
            />
            <div className="container mx-auto">
                <h1 className="py-12 text-center uppercase text-2xl md:text-4xl xl:text-5xl">
                    {props.heading}
                </h1>   
            </div>
        </div>
    )
}

export default PageHeadingWithImage