import React from "react";
import PageHeading from "./PageHeading";

const StaticMasthead = (props) => {
       
    return (
        <div className="w-screen h-[60vh] relative">
            <div className="absolute inset-0 bg-center" 
                style={{
                    backgroundImage: `url(${props.imageSrc})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >   
            </div>
        </div>
    )
}

export default StaticMasthead