import React, { useState } from "react";
import { SpotGuideLinks } from "../Data/SpotGuideLinks";
import BlogLink from "../Common-Components/BlogLink";
import StaticMasthead from "../Common-Components/StaticMasthead";
import PageHeading from "../Common-Components/PageHeading";
import { act } from "react-dom/test-utils";

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

      <section className="pt-8">
        <div className="container mx-auto pb-8">
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-between gap-2">
            {windsurfingLocations.map((location, index) => {

              const handleChange = () => {
                setActiveFilter(location.filter);
              }
              console.log(activeFilter)

              return (
                  <button onClick={handleChange} className={`${index === 0 ? 'col-span-2 lg:w-48' : 'w-full lg:w-48'} bg-blue cursor-pointer flex justify-center items-center uppercase text-base lg:text-lg text-white py-2`}>
                    {location.location}
                  </button>
              )
            })}
          </div>
          <div>
            
          </div>
        </div>

      </section>

      <section className="pb-20">
        <div className="container mx-auto">
          <div className={blogGridClasses}>
            {activeFilter.map((blog) => {
                  return blog.blogLinkData.map((data, index) => {
                    return (
                        <div key={index}>
                          <BlogLink {...data} index={index}/>
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
