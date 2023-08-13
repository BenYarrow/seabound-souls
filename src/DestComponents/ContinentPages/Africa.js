import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../Data/Blogs";

const africaBlogs = blogs
  .map((blog) => {
    return blog;
  })
  .filter((location) => location.continent === "africa");

const AfricaBlogLink = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 text-blue font-standard mb-8">
      {africaBlogs.map((blogLink, index) => {
        return (
          <div className=" p-4   hover:bg-blue/60 hover:text-standard duration-200 ease-out hover:ease-in" key={index}>
            {blogLink.blogData.map((data, index) => {
              return (
                <Link to={data.linkTo} key={index}>
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


const Africa = () => {


  return (
    <div className="font-standard pb-8 ">
      <div className="py-8">
        <h1 className="text-4xl lg:text-6xl text-blue text-center uppercase ">
          Africa
        </h1>
      </div>
      <div>
        
        <AfricaBlogLink />

      </div>
    </div>
  );
};

export default Africa;
