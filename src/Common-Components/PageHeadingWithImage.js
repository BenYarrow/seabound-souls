import React from "react";

const PageHeadingWithImage = (props) => {
       
    return (
        <div>
        <section 
            className="w-screen h-screen bg-cover bg-center lg:bg-top -z-10"
            style={{
            backgroundImage: `url(${props.imageSrc})`,
            backgroundRepeat: "no-repeat",
            }}
        > 
        </section> 
            <h1 className="pt-80 text-8xl lg:text-6xl tracking-wider uppercase font-standard text-black text-center py-12">
                {props.heading}
            </h1>
        </div>
    )
}

export default PageHeadingWithImage