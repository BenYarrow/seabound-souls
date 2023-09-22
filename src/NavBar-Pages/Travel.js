import React from "react";
import { blogs } from "../Data/Blogs";
import SectionTitle from "../Common-Components/SectionTitle";
import BlogLink from "../Common-Components/BlogLink";

const allBlogs = blogs.map(blog => {
  return(
    blog
  )
})

const africaBlogs = allBlogs.filter(continent => continent.continent === 'africa')
const europeBlogs = allBlogs.filter(continent => continent.continent === 'europe')
const northAmericaBlogs = allBlogs.filter(continent => continent.continent === 'north america')

const Travel = () => {

  return (
    <div className="w-full pt-[8rem] md:pt-[12rem] px-8  pb-16 flex justify-center">
      <div 
        className="md:border-t-[1px] md:border-blue/40 flex flex-col">

        <SectionTitle 
          title='Africa'
        /> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
          <SectionTitle 
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
          <SectionTitle 
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
