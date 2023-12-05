import React from "react";
import { SpotGuideLinks } from "./Data/SpotGuideLinks";
import { blogs } from "./Data/Blogs";
import BlogLink from "./Common-Components/BlogLink";
import SwiperHeroSlider from "./Common-Components/SwiperHeroSlider";

function Homepage() {

  const windsurfingOne = "images/mastheads/homepage/windsurfing-together-01.jpg";
  const fuerteventuraBeach = "images/mastheads/about-us/fuerteventura-beach-01.jpg";
  const windsurfingTwo = "images/mastheads/homepage/ben-vulcan-fuerteventura.jpg";

  const heroImages = [
    {
      image: windsurfingOne,
    },
    {
      image: windsurfingTwo,
    },
  ]

  const featuredSpotGuideLinks = SpotGuideLinks
    .map((blog) => {
      return blog;
    })
    .filter((featured) => featured.featured === true);
  
  featuredSpotGuideLinks.sort((a, b) => {
    if (a.featuredOrder < b.featuredOrder) {
      return -1
    } else if (a.featuredOrder > b.featuredOrder) {
      return 1
    } else {
      return 0
    }
  })

  const featuredBlogs = blogs
  .map((blog) => {
    return blog;
  })
  .filter((featured) => featured.featured === true);

  const blogGridClasses = 'grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 gap-20'

  return (
    <div className="relative">
      
      <SwiperHeroSlider images={heroImages}/>

      <section 
        className="w-full py-20 container mx-auto"
        id="content"
      >

        <div className="grid grid-cols 1 gap-20 lg:grid-cols-2 xl:grid-cols-9">
          
          <div className="flex flex-col items-center space-8-12 xl:col-span-6">
            <h3 className="font-title text-4xl lg:max-w-2xl text-center uppercase pb-8 border-b-[1px] border-blue">
              Memories are made where the wind meets the waves
            </h3>
            <div className="pt-8 space-y-8 flex flex-col items-center">
              <h3 className="font-title text-4xl uppercase ">
                  Get to know us
              </h3>
              <p className='text-center'>
                Hi! We are Rachel and Ben. We're two adventure seekers, travelling the world wherever the wind takes us. 
              </p>
              <p className='text-center'>
                Follow our journey to discover the most incredible windsurfing destinations around the globe.
              </p>
              <p className='text-center'>
                This isn't just a travel blog; it's a gateway to a unique blend of adrenaline and exploration. Whether you're a seasoned windurfer seeking the next ultimate spot or a curious traveller ready to dive into the exhilarating world of windsurfing, our blog is here to inspire, inform and fuel your passion for this incredible water sport.
              </p>
              <p className='text-center'>
                Join us as we chase the winds, discover new horizons and travel to the very best windsurf destinations.
              </p>
            </div>
          </div>

          <div className="w-full h-[500px] lg:h-full flex bg-center bg-cover shadow-2xl xl:col-span-3" style={{
            backgroundImage: `url(${fuerteventuraBeach})`,
            backgroundRepeat: "no-repeat",
            }}></div>

          </div>
      </section>

      <section className="bg-blue text-white py-20">
        <div className="container mx-auto flex flex-col space-y-12">
          <div className='flex flex-col items-center space-y-4'>
            <h3 className="font-title text-6xl uppercase">
              Destinations
            </h3>
            <p className='text-center text-xl'>
              Ultimate spot guides, advice and travel tips for windsurfers to help you plan your next windsurf trip
            </p>
          </div>
          <div className={blogGridClasses}>
            {featuredSpotGuideLinks.map((blog) => {
              return blog.blogLinkData.map((data, index) => {
                return (
                  <BlogLink {...data} index={index}/>
                );
              });
            })}
          </div>
        </div>

      </section>

      <section className="py-20">
        <div className="container mx-auto flex flex-col space-y-12">
          <div className='flex flex-col items-center space-y-4'>
            <h3 className="font-title text-6xl uppercase">
              Blog
            </h3>
            <p className='text-center text-xl'>
              Follow our adventures as we travel and windsurf our way around the world
            </p>
          </div>
          <div className={blogGridClasses}>
            {featuredBlogs.map((blog) => {
              return blog.blogLinkData.map((data) => {
                return <BlogLink {...data} aria-label={`Read about our time in ${data.location}`}/>;
              });
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Homepage;
