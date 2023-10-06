import React from "react";
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
  
  // const egyptWindsurfingBlogs = destinationBlogs.map(blog => {
  //   return (
  //     blog
  //   )
  // }).filter(location => location.country === 'egypt')

  // const fuerteventuraWindsurfingBlogs = destinationBlogs.map(blog => {
  //   return (
  //     blog
  //   )
  // }).filter(location => location.country === 'fuerteventura')

  // const greeceWindsurfingBlogs = destinationBlogs.map(blog => {
  //   return (
  //     blog
  //   )
  // }).filter(location => location.country === 'greece')

  // const mauritiusWindsurfingBlogs = destinationBlogs.map(blog => {
  //   return (
  //     blog
  //   )
  // }).filter(location => location.country === 'mauritius')


  windsurfingBlogs.sort((a, b) => {
    if (a.country < b.country) {
      return -1
    }
    if (a.country > b.country) {
      return 1
    }
    return 0;
  })

  return (

    <div className="relative">

      <SwiperHeroSlider images={heroImages} heading='Spot guide'/>

      <section id='content' >
        <div className="container mx-auto py-20">
          <ul class="flex justify-between">
            {windsurfingBlogs.map((title, index) => {
              return(
                <li key={index} class="w-40 py-2 flex justify-center bg-blue">
                  <button class="uppercase text-lg text-white">
                    {title.country}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section>
        
      </section>
      
      
    </div>
  );
};

export default Destinations;
