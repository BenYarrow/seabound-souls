import React from "react";
import { destinationBlogs } from "./Data/DestinationBlogs";
import { blogs } from "./Data/Blogs";
import BlogLink from "./Common-Components/BlogLink";

function Homepage() {

  const heroImage = "Background-Images/hero-background.jpg";
  const destinationImage = "/Homepage-images/fuerteventura-beach-01.jpg";

  const featuredDestinationBlogs = destinationBlogs
    .map((blog) => {
      return blog;
    })
    .filter((featured) => featured.featured === true);

  const featuredBlogs = destinationBlogs
  .map((blog) => {
    return blog;
  })
  .filter((featured) => featured.featured === true);

  return (
    <div>
        <section 
        className="w-screen h-[92vh] bg-cover bg-center lg:bg-top"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
        }}
      > 
      </section> 

      <section 
        className="w-full py-20 container mx-auto"
      >
        <div className="grid grid-cols-1 lg::grid-cols-2 xl:grid-cols-3 gap-4">
          
          <div className="flex flex-col items-center space-8-12 xl:col-span-2">
            <h3 className="font-title text-4xl lg:text-7xl lg:max-w-2xl text-center uppercase text-blue pb-8 border-b-[1px] border-blue">
              Memories are made where the wind meets the waves
            </h3>
            <div className="pt-8 space-y-8 flex flex-col items-center">
              <h3 className="font-title text-4xl lg:text-7xl uppercase text-blue ">
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

          <div class="w-full bg-cover bg-center"         
            style={{
            backgroundImage: `url(${destinationImage})`,
            backgroundRepeat: "no-repeat",
            }}
          >
            
          </div>

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {featuredDestinationBlogs.map((blog) => {
              return blog.blogLinkData.map((data) => {
                return <BlogLink {...data} />;
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {featuredBlogs.map((blog) => {
              return blog.blogLinkData.map((data) => {
                return <BlogLink {...data} />;
              });
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Homepage;
