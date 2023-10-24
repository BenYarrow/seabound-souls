import React from "react";

const PageHeading = (props) => {
       
    return (
        <div className="w-full container mx-auto flex justify-center items-center pb-8 pt-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase font-title text-center ">
                {props.heading}
            </h1>
        </div>
    )
}

export default PageHeading