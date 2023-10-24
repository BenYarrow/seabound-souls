import React, { useState } from "react";
import { SpotGuideLinks } from "../Data/SpotGuideLinks";
import BlogLink from "../Common-Components/BlogLink";
import StaticMasthead from "../Common-Components/StaticMasthead";
import PageHeading from "../Common-Components/PageHeading";

const Destinations = () => {
  
  const masthead = "images/mastheads/destinations/destinations-masthead.jpg";

  const windsurfingBlogs = SpotGuideLinks.filter(visible => visible.isVisible === true)
  
  const egyptWindsurfingBlogs = windsurfingBlogs.map(blog => {
    return (
      blog
    )
  }).filter(location => location.country === 'egypt')

  const canaryIslandWindsurfingBlogs = windsurfingBlogs.map(blog => {
    return (
      blog
    )
  }).filter(location => location.country === 'canary islands')

  const greeceWindsurfingBlogs = windsurfingBlogs.map(blog => {
    return (
      blog
    )
  }).filter(location => location.country === 'greece')

  const mauritiusWindsurfingBlogs = windsurfingBlogs.map(blog => {
    return (
      blog
    )
  }).filter(location => location.country === 'mauritius')

  const windsurfingLocations = [
    {
      location: 'all',
      filter: windsurfingBlogs,
    },
    {
      location: 'canary islands',
      filter: canaryIslandWindsurfingBlogs,
    },
    {
      location: 'egypt',
      filter: egyptWindsurfingBlogs,
    },
    {
      location: 'greece',
      filter: greeceWindsurfingBlogs,
    },
    {
      location: 'mauritius',
      filter: mauritiusWindsurfingBlogs,
    }
  ]
  windsurfingLocations.sort((a, b) => {
    if (a.location < b.location) {
      return -1
    } else if (a.location > b.location) {
      return 1
    } else {
      return 0
    }
  })

  const blogGridClasses = 'grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 gap-20'
  
  const [activeFilter, setActiveFilter] = useState(windsurfingBlogs)

  return (

    <div>

      <StaticMasthead imageSrc={masthead} />
      <PageHeading heading='Destination spot guides' />

      <section className="">
        <div className="container mx-auto pb-8">
          <ul className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-between gap-2">
            {windsurfingLocations.map((location, index) => {

              const handleChange = () => {
                setActiveFilter(location.filter);
              }

              return (
                <li key={index} 
                  className={`${index === 0 ? 'col-span-2 lg:w-48' : 'w-full lg:w-48'} py-2 bg-blue text-center uppercase text-base lg:text-lg text-white cursor-pointer`}
                  onClick={handleChange}
                >
                    {location.location}
                </li>
              )
            })}
          </ul>
          <div>
            
          </div>
        </div>

      </section>

      <section className="pb-20">
        <div className="container mx-auto">
          <div className={blogGridClasses}>
            {activeFilter.map((blog, index) => {
                  return blog.blogLinkData.map((data, index) => {
                    return (
                        <div key={index}>
                          <BlogLink {...data} index={index}  />
                        </div>
                    );
                  });
                })}
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Destinations;
