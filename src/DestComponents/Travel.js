import React from "react";
import { Link } from "react-router-dom";
// import { continents } from "../Data/Continents";
import { blogs } from "../Data/Blogs";
import Heading from "../Components/Heading";

// const allContinents = continents.filter(
//     (continent) => continent.countries.some((country) => country.isEnabled)
//   )

const allBlogs = blogs.map(blog => {
  return(
    blog
  )
})

const africaBlogs = allBlogs.filter(continent => continent.continent === 'africa')

const europeBlogs = allBlogs.filter(continent => continent.continent === 'europe')

const northAmericaBlogs = allBlogs.filter(continent => continent.continent === 'north america')


// const comingSoonList = continents.map(
//     (continent) => continent.countries.filter((country) => !country.isEnabled)
// ).flat(1)

const BlogLink = ({ title, blogLinkImgSrc, linkTo }) => {
  return (
    <div className="group font-standard border-b-[1px] border-blue/40 ">
      <Link to={linkTo}>
        <div className="w-80 h-80 overflow-hidden">
          <div
            className="aspect-square group-hover:scale-110 transition duration-700 "
            style={{
              backgroundImage: `url(${blogLinkImgSrc})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >

          </div>
        </div>

      </Link>
        <h2 className="font-standard text-black text-left text-xl py-2">
          {title}
        </h2>
    </div>
  );
};

const Travel = () => {

  return (
    <div className="w-full pt-[8rem] md:pt-[12rem] px-8 lg:px-20 pb-16 flex justify-center">
      <div className="md:border-t-[1px] md:border-blue/40 flex flex-col ">

        <Heading 
          title='Africa'
        /> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {africaBlogs.map(blog => {
            return blog.blogLinkData.map(data => {
              return (
                <div>
                  <BlogLink {...data} />
                </div>
              )
            })
          })}
        </div>

        <div>
          <Heading 
            title='europe'
          /> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {europeBlogs.map(blog => {
              return blog.blogLinkData.map(data => {
                return (
                  <div>
                    <BlogLink {...data} />
                  </div>
                )
              })
            })}
          </div>
        </div>

        <div>
          <Heading 
            title='north america'
          /> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {northAmericaBlogs.map(blog => {
              return blog.blogLinkData.map(data => {
                return (
                  <div>
                    <BlogLink {...data} />
                  </div>
                )
              })
            })}
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Travel;
