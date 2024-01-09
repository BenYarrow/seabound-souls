import { React, useRef, useState } from "react";
import { SpotGuideLinks } from "../Data/SpotGuideLinks";
import BlogLink from "../Common-Components/BlogLink";
import StaticMasthead from "../Common-Components/StaticMasthead";
import PageHeading from "../Common-Components/PageHeading";

const Destinations = () => {
  
  const masthead = "images/mastheads/destinations/destinations-masthead.jpg";

  const windsurfingBlogs = SpotGuideLinks.filter(visible => visible.isVisible === true)

  // Extract unique countries from SpotGuideLinks
  const uniqueContinents = Array.from(new Set(windsurfingBlogs.map((blog) => blog.continent)));

  // Generate an array of objects with location and filter
  const windsurfingLocations = uniqueContinents.map((continent) => ({
    location: continent,
    filter: windsurfingBlogs.filter((location) => location.continent === continent),
  }));
 
  windsurfingLocations.sort((a, b) => a.location.localeCompare(b.location)); 

  const gapClasses = 'lg:gap-8 xl:gap-12'

  const blogGridClasses = [
    'grid grid-cols-1 md:grid-cols-3',
    'gap-8',
    gapClasses,
  ].join(' ')
  
  const [activeFilter, setActiveFilter] = useState(windsurfingBlogs)
  
  return (

    <div>

      <StaticMasthead imageSrc={masthead} />
      
      <PageHeading heading='Destination spot guides' />

      <section className="pt-8">
        <div className={`container mx-auto pb-8 grid grid-cols-1 gap-2 lg:grid-cols-3 ${gapClasses}`}>
          <button 
            onClick={() => setActiveFilter(windsurfingBlogs)} 
            className={`${JSON.stringify(activeFilter) === JSON.stringify(windsurfingBlogs) ? 'bg-blue text-white ' : 'bg-blue-lighter text-blue' } cursor-pointer flex justify-center items-center uppercase text-base lg:text-lg w-full py-2 font-bold`}
          >
            All
          </button>

          {windsurfingLocations.map((location, index) => {

            const handleChange = () => {
              setActiveFilter(location.filter);
            };

            return (
              <button
                key={index}
                onClick={handleChange}
                className={`${index === 0 ? 'x' : ''} ${
                  JSON.stringify(activeFilter) === JSON.stringify(location.filter)
                    ? 'bg-blue text-white '
                    : 'bg-blue-lighter text-blue'
                  } cursor-pointer flex justify-center items-center uppercase text-base lg:text-lg w-full py-2 font-bold`}
              >
                {location.location}
              </button>
            );
          })}

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
