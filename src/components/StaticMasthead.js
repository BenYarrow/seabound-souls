import React from "react";

const StaticMasthead = (props) => {
       
    return (
        <div className="w-screen h-[60vh] relative overflow-hidden">
            <img
                src={props.imageSrc}
                alt="Masthead Image"
                width="2500"
                height="200"
                className="absolute left-0 top-0 h-full w-full object-cover"
            />
        </div>
    )
}

export default StaticMasthead