import React from "react";

const StaticMasthead = (props) => {
       
    return (
        <div className="w-screen h-[60vh] relative" style={{
            backgroundImage: `url(${props.imageSrc})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}> 
        </div>
    )
}

export default StaticMasthead