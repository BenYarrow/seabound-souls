import React from "react";

const PageHeading = (props) => {
       
    return (
        <div className="w-full container mx-auto flex justify-center items-center pt-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase font-title text-center ">
                {props.heading}
            </h2>
        </div>
    )
}

export default PageHeading