import React from "react";

const PageHeading = (props) => {
       
    return (
        <h1 className="pb-20 text-7xl tracking-[12px] uppercase font-title  text-center">
            {props.heading}
        </h1>
    )
}

export default PageHeading