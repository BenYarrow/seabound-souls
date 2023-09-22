import React from "react";

const SectionTitle = (props) => {
       
    return (
        <h3 className="text-4xl lg:text-4xl tracking-wider uppercase font-standard text-black text-center py-12">
            {props.title}
        </h3>
    )
}

export default SectionTitle