import React from "react";

const PageHeading = (props) => {
       
    return (
        <h1 className="pb-20 text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase font-title  text-center">
            {props.heading}
        </h1>
    )
}

export default PageHeading