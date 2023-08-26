import React from "react";
import { blogs } from "./Data/Blogs";
import FeaturedBlogLinks from "./HomepageComponents/FeaturedBlogLinks";
import { text } from "@fortawesome/fontawesome-svg-core";

function Homepage() {
  const heroImage = "Background-Images/hero-background.jpg";

  const featuredBlogs = blogs
    .map((blog) => {
      return blog;
    })
    .filter((featured) => featured.featured === true);

    
    const wrapperClasses = 'flex flex-col space-y-8 '
    const headingClasses = 'text-3xl uppercase font-title'
    const textClasses = 'text-lg'

  return (
    <div className="">
      {/* <div id="hero-section"></div> */}
         <section
          className="w-screen h-screen object-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
          }}
        > 
        </section> 
      <div className="w-full">

        <section className="w-full py-16 bg-blue text-standard flex justify-center ">
          <div className="max-w-4xl flex flex-col space-y-8">

            <h3 className={headingClasses}>Welcome to Seabound Souls!</h3>
            <p className={textClasses}>
              Hi, we're Ben and Rachel, a married couple from the UK with a
              shared love of windsurfing and travel.
            </p>

            <div className="grid grid-cols-1 gap-8">
              <div className={wrapperClasses}>
                <h3 className={headingClasses}>Our mission</h3>
                <p className={textClasses}>
                  As two adventure seekers, we have made it our mission to travel
                  wherever the wind takes us. Follow our journey as we discover
                  the most breathtaking windsurfing destinations around the world.
                </p>
              </div>

              <div className={wrapperClasses}>
                <h3 className={headingClasses}>Our blog</h3>
                <p className={textClasses}>
                  This is not just a travel blog; it's a gateway to a unique blend
                  of adrenaline and exploration. Whether you're a seasoned
                  windsurfer seeking the next ultimate spot or a curious traveller
                  ready to dive into the exhilarating world of windsurfing, our
                  blog is here to inspire, inform and fuel your passion for this
                  incredible water sport. 
                </p>

              </div>
            </div>
          
            <p className={textClasses}>
              Join us as we chase the winds, discover
              new horizons and travel the world windsurfing together. Embark
              on a journey that embraces the freedom of the open water and the
              sheer joy of harnessing the elements.
            </p>

          </div>
        </section>

        <section>
          <div className="bg-standard text-blue p-8 xl:p-16">
            <h3 className="text-left text-3xl uppercase pb-8">
              Latest Blogs
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
              {featuredBlogs.map((blog) => {
                return blog.blogData.map((data) => {
                  return <FeaturedBlogLinks {...data} />;
                });
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-16 font-standard  text-standard bg-blue flex justify-evenly">
          <div className="max-w-4xl flex flex-col space-y-4 items-center justify-around">
            <p className="text-4xl md:text-3xl lg:text-4xl text-center font-title tracking-widest leading-loose">
              Where the wind meets the waves, <br /> is where the memories are
              made
            </p>
          </div>
        </section>

        {/* <section
          className="w-full h-[40rem] object-cover"
          style={{
            backgroundImage: `url(${vassBay})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        > 
        </section> */}

      </div>
    </div>
  );
}

export default Homepage;
