import React from "react";
import { Link } from "react-router-dom";

const BlogLink = ({
    linkTo,
    title,
    blogLinkImgSrc,
    blogLinkImgAlt,
    blogIntro,
  }) => {
    return (
      <div className="p-4 hover:bg-blue/60 hover:text-standard duration-200 ease-out hover:ease-in">
        <Link to={linkTo}>
          <div className="flex flex-col w-full h-auto  ">
            <h2 className="text-xl text-left pb-4 font-bold">{title}</h2>
            <img
              src={blogLinkImgSrc}
              alt={blogLinkImgAlt}
              className="aspect-square object-cover"
            />
            <p className="pt-6 text-base text-left">
              {blogIntro}
              <span className="underline">Read more</span>
            </p>
          </div>
        </Link>
      </div>

    );
  };

  export default BlogLink