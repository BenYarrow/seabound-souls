import React, { useState } from "react";
import { spotGuides } from "../Data/SpotGuides";
import SwiperHeroSlider from "../Common-Components/SwiperHeroSlider";
import BlogLink from "../Common-Components/BlogLink";
import PageHeadingWithImage from "../Common-Components/PageHeadingWithImage";

const Destinations = () => {
  
  const windsurfingOne = "Masthead-Images/windsurfing-together-01.jpg";
  const fuerteventuraBeach = "/Masthead-Images/fuerteventura-beach-01.jpg";
  const windsurfingTwo = "Masthead-Images/ben-vulcan-fuerteventura.jpg";
  
  const windsurfingBlogs = spotGuides.filter(visible => visible.isVisible === true)
  
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
      image: windsurfingOne
    },
    {
      location: 'canary islands',
      filter: canaryIslandWindsurfingBlogs,
      image: fuerteventuraBeach
    },
    {
      location: 'egypt',
      filter: egyptWindsurfingBlogs,
      image: windsurfingTwo
    },
    {
      location: 'greece',
      filter: greeceWindsurfingBlogs,
      image: ''
    },
    {
      location: 'mauritius',
      filter: mauritiusWindsurfingBlogs,
      image: ''
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

  const [activeMastHead, setActiveMasthead] = useState(windsurfingOne)

  return (

    <div className="relative">

      <PageHeadingWithImage imageSrc={activeMastHead} heading='Destination spot guides' />

      <section>
        <div className="container mx-auto pb-20">
          <ul className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-between gap-2">
            {windsurfingLocations.map((location, index) => {

              const handleChange = () => {
                setActiveFilter(location.filter);
                setActiveMasthead(location.image);
                console.log('clicked')

              }

              return (
                <li key={index} className={`${index === 0 ? 'col-span-2 lg:w-48' : 'w-full lg:w-48'} py-2 bg-blue text-center`}>
                  <button className="uppercase text-base lg:text-lg text-white"
                    onClick={handleChange}
                  >
                    {location.location}
                  </button>
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
            {activeFilter.map((blog) => {
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
