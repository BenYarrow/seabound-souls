import React, { useState } from "react";
import { destinationBlogs } from "../Data/DestinationBlogs";
import SwiperHeroSlider from "../Common-Components/SwiperHeroSlider";
import BlogLink from "../Common-Components/BlogLink";


const Destinations = () => {

  const windsurfingOne = "Masthead-Images/windsurfing-together-01.jpg";
  const fuerteventuraBeach = "/Masthead-Images/fuerteventura-beach-01.jpg";
  const windsurfingTwo = "Masthead-Images/ben-vulcan-fuerteventura.jpg";

  const heroImages = [
    {
      image: windsurfingOne,
      bgImageClasses: 'bg-cover bg-center'
    },
    {
      image: fuerteventuraBeach,
      bgImageClasses: 'bg-cover bg-center',
    },
    {
      image: windsurfingTwo,
      bgImageClasses: 'bg-cover bg-center',
    },
  ]
  
  const windsurfingBlogs = destinationBlogs.filter(type => type.blogType === 'windsurfing')
  
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
  
  const [blogFilter, setBlogFilter] = useState(windsurfingBlogs)


  return (

    <div className="relative">

      <SwiperHeroSlider images={heroImages} heading='Spot guide'/>

      <section id='content' >
        <div className="container mx-auto py-20">
          <ul class="flex justify-between">
            {windsurfingLocations.map((location, index) => {
              console.log(location.filter)
              return (
                <li key={index} class="w-40 py-2 flex justify-center bg-blue">
                  <button class="uppercase text-lg text-white"
                    onClick={() => setBlogFilter(location.filter)}
                  >
                    {location.location}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section class="pb-20">
        <div class="container mx-auto">
          <div className={blogGridClasses}>
            {blogFilter.map((blog) => {
                  return blog.blogLinkData.map((data, index) => {
                    return (
                      <BlogLink {...data} index={index}  />
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
