import React from "react";
import { destinationBlogs } from "./Data/DestinationBlogs";
import { blogs } from "./Data/Blogs";
import BlogLink from "./Common-Components/BlogLink";
import PageHeading from "./Common-Components/PageHeading";
import SwiperHeroSlider from "./Common-Components/SwiperHeroSlider";

function Homepage() {

  const heroImageOne = "Background-Images/hero-background.jpg";
  const heroImageTwo = "/Homepage-images/fuerteventura-beach-01.jpg";

  const heroImages = [
    {
      image: heroImageOne,
      bgImageClasses: 'bg-cover bg-center'
    },
    {
      image: heroImageTwo,
      bgImageClasses: 'bg-cover bg-center',
    },
  ]

  const featuredDestinationBlogs = destinationBlogs
    .map((blog) => {
      return blog;
    })
    .filter((featured) => featured.featured === true);

  const featuredBlogs = blogs
  .map((blog) => {
    return blog;
  })
  .filter((featured) => featured.featured === true);

  const blogGridClasses = 'grid grid-cols-1 md:grid-cols-3 gap-20'

  return (
    <div>
      
      <SwiperHeroSlider images={heroImages}/>


      <section 
        className="w-full py-20 container mx-auto"
        id="top-section"
      >
        <div>
          <PageHeading heading='Seabound Souls'/>
        </div>

        <div className="grid grid-cols 1 gap-20 lg:grid-cols-2 xl:grid-cols-9">
          
          <div className="flex flex-col items-center space-8-12 xl:col-span-6">
            <h3 className="font-title text-4xl lg:max-w-2xl text-center uppercase text-blue pb-8 border-b-[1px] border-blue">
              Memories are made where the wind meets the waves
            </h3>
            <div className="pt-8 space-y-8 flex flex-col items-center">
              <h3 className="font-title text-4xl uppercase text-blue ">
                  Get to know us
              </h3>
              <p className='text-center text-lg text-blue'>
                We are Rachel and ben. Two adventure seekers, travelling wherever the wind takes us. Follow our journey as we discover the most incredible windsurfing destinations around the globe.
              </p>
              <p className='text-center text-lg text-blue'>
                This is not just a travel blog; it's a gateway to a unique blend of adrenaline and exploration. Whether you're a seasoned windurfer seeking the next ultimate spot or a curious traveller ready to dive into the exhilarating world of windsurfing, our blog is here to inspire, inform and fuel your passion for this incredible water sport.
              </p>
              <p className='text-center text-lg text-blue'>
                Join us as we chase the winds, discover new horizons and travel the world windsurfing together.
              </p>
            </div>
          </div>

          <div className="w-full h-[500px] lg:h-full flex bg-center bg-cover shadow-2xl xl:col-span-3" style={{
            backgroundImage: `url(${heroImageTwo})`,
            backgroundRepeat: "no-repeat",
            }}></div>

          </div>
      </section>

      <section className="bg-blue text-standard py-20">
        <div className="container mx-auto flex flex-col space-y-12">
          <div className='flex flex-col items-center space-y-4'>
            <h3 className="font-title text-6xl uppercase">
              Destinations
            </h3>
            <p className='text-center text-lg text-white'>
              Ultimate spot guides, advice and travel tips for windsurfers to help you plan your next windsurf trip
            </p>
          </div>
          <div className={blogGridClasses}>
            {featuredDestinationBlogs.map((blog) => {
              return blog.blogLinkData.map((data) => {
                return <BlogLink {...data} textColour='text-standard' />;
              });
            })}
          </div>
        </div>
      </section>

      <section className="bg-standard text-blue py-20">
        <div className="container mx-auto flex flex-col space-y-12">
          <div className='flex flex-col items-center space-y-4'>
            <h3 className="font-title text-6xl uppercase">
              Blog
            </h3>
            <p className='text-center text-lg text-blue'>
              Follow our adventures as we travel and windsurf our way around the world
            </p>
          </div>
          <div className={blogGridClasses}>
            {featuredBlogs.map((blog) => {
              return blog.blogLinkData.map((data) => {
                return <BlogLink {...data} textColour='text-blue'/>;
              });
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Homepage;
