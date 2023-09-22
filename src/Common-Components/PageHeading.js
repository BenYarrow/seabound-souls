import React from "react";

const PageHeading = (props) => {
       
    return (
        <h1 className="pt-40 md:pt-52 text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase font-standard text-black text-center py-12">
            {props.heading}
        </h1>
    )
}

export default PageHeading