import React, { useState } from "react";
import { blogs } from "./Data/Blogs";
import BlogLink from "./DestComponents/BlogComponents/BlogLink";

const BlogPage = () => {
  const allBlogs = blogs.map((blog) => {
    return blog;
  });

  const windsurfingBlogs = allBlogs
    .map((blog) => {
      return blog;
    })
    .filter((type) => type.blogType === "windsurfing");

  const accomodationBlogs = allBlogs
    .map((blog) => {
      return blog;
    })
    .filter((type) => type.blogType === "accomodation");

  const africaBlogs = blogs
    .map((blog) => {
      return blog;
    })
    .filter((location) => location.continent === "africa");

    const europeBlogs = blogs.map(blog => {
        return (
            blog
        )
    }).filter(location => location.continent === 'europe')
    
    const northAmericaBlogs = blogs.map(blog => {
        return (
            blog
        )
    }).filter(location => location.continent === 'north america')

  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);

  const handleAllBlogs = () => {
    setFilteredBlogs(allBlogs);
  };

  const handleWindsurfingBlogs = () => {
    setFilteredBlogs(windsurfingBlogs);
  };

  const handleAccomodationBlogs = () => {
    setFilteredBlogs(accomodationBlogs);
  };

  const handleAfricaBlogs = () => {
    setFilteredBlogs(africaBlogs);
  };

  const handleEuropeBlogs = () => {
    setFilteredBlogs(europeBlogs);
  };

  const handleNorthAmericaBlogs = () => {
    setFilteredBlogs(northAmericaBlogs);
  };

  return (
    <div>
      <div>
        <p>Filter by type</p>
        <button onClick={handleAllBlogs} class="mx-4 bg-blue">
          All Blogs
        </button>
        <button onClick={handleWindsurfingBlogs} class="mx-4 bg-blue">
          Set Windsurfing
        </button>
        <button onClick={handleAccomodationBlogs} class="mx-4 bg-blue">
          Set Accomodation
        </button>
      </div>

      <div>
        <p>Filter by location</p>
        <button onClick={handleAfricaBlogs} class="mx-4 bg-blue">
          Africa
        </button>
        <button onClick={handleEuropeBlogs} class="mx-4 bg-blue">
          Europe
        </button>
        <button onClick={handleNorthAmericaBlogs} class="mx-4 bg-blue">
          North America
        </button>
      </div>

      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 text-blue font-standard mb-8">
        {filteredBlogs.map((blog, index) => {
          return (
            <div key={index}>
              {blog.blogData.map((data) => {
                return (
                  <div>
                    <BlogLink {...data} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
