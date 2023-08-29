import React from "react";
import { Link } from "react-router-dom";

const FeaturedBlogLinks = ({
    linkTo,
    title,
    blogLinkImgSrc,
  }) => {

    return(
            <Link to={linkTo} className="group transition duration-300">
                <div className="flex flex-col w-full justify-between h-full">
                    <h3 className="text-lg text-center pb-4 font-bold lg:hidden">{title}</h3>
                    <div 
                        className="aspect-square"
                        style={{
                            backgroundImage: `url(${blogLinkImgSrc})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                    }}>
                        <div className="hidden w-full h-full group-hover:bg-standard/60 group-hover:flex group-hover:justify-center  group-hover:items-center">
                            <h3 className="text-xl font-title xl:text-3xl uppercase text-blue font-bold">
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
            </Link>
        
    )
}

export default FeaturedBlogLinks