import React from "react";
import { blogs } from "../Data/Blogs";
import { Link } from "react-router-dom";

let mauritiusBlogs = blogs.filter(
  (location) => location.country === "mauritius"
);

const BlogLink = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 text-blue font-standard mb-8">
      {mauritiusBlogs.map((blogLink) => {
        return (
          <div className=" p-4   hover:bg-blue/60 hover:text-standard duration-200 ease-out hover:ease-in">
            {blogLink.blogLinkData.map((data) => {
              return (
                <Link to={data.linkTo}>
                  <div className="flex flex-col w-full h-auto  ">
                    <h2 className="text-xl text-left pb-4 font-bold">
                      {data.title}
                    </h2>
                    <img
                      src={data.blogLinkImgSrc}
                      alt={data.blogLinkImgAlt}
                      className="aspect-square object-cover"
                      width="100%"
                    />
                    <p className="pt-6 text-base text-left">
                      {data.blogIntro}{" "}
                      <a href={data.linkTo} className="underline">
                        Read more
                      </a>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

function Mauritius() {
  return (
    <div className="font-standard pb-8 ">
      <div className="py-8">
        <h1 className="text-4xl lg:text-6xl text-blue text-center ">
          Mauritius
        </h1>
        <p className="text-xl text-blue/80 text-center ">Le Morne</p>
      </div>
      <div>
        <BlogLink />
      </div>
    </div>
  );
}

export default Mauritius;
