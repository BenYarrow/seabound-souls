import React from "react";

const Heading = (props) => {
    return (
        <h3 className="text-4xl lg:text-6xl font-title tracking-wider uppercase py-8">
            {props.title}
        </h3>
    )
}

export default Heading