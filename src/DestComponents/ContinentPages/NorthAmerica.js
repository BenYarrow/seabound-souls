import React from "react"
import { blogs } from "../../Data/Blogs"
import BlogLink from "../BlogComponents/BlogLink"

let northAmericaBlogs = blogs.map(blog => {
    return (
        blog
    )
}).filter(location => location.continent === 'north america')

const NorthAmerica = () => {
    return (
        <div className="font-standard pb-8 ">
        <div className="py-8">
          <h1 className="text-4xl lg:text-6xl text-blue text-center uppercase ">
            North America
          </h1>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 text-blue font-standard mb-8">
          
          {northAmericaBlogs.map((blog, index) => {
            return (
              <div key={index}>
                {blog.blogData.map(data => {
                  return (
                    <div>
                      <BlogLink {...data} />
                    </div>
                  )
                })}
                
              </div>
            );
          })}
        
        </div>
      </div>
    )
}

export default NorthAmerica