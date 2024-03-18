import { React, useState } from "react";
import { spotGuideLinks } from "../Data/spot-guide-links";
import BlogLink from "../components/BlogLink";
import StaticMasthead from "../components/StaticMasthead";
import Title from "../components/Title";
import SiteHelmet from "../components/SiteHelmet";
import BlockWrapper from "../components/BlockWrapper"
import SimpleMap from "../components/simple-maps/SimpleMap";

const Destinations = () => {
  
  const mastheadImages = {
    sm: '/images/mastheads/destinations/ben-vulcan-vassiliki-tablet.jpg',
    md: '/images/mastheads/destinations/ben-vulcan-vassiliki-tablet.jpg',
    lg: '/images/mastheads/destinations/ben-vulcan-vassiliki-desktop.jpg',
    alt: 'Ben windsrurfing in Vassiliki',
    customClasses: 'object-cover object-centre md:object-bottom lg:object-centre'
  } 

  const windsurfingBlogs = spotGuideLinks.filter(link => link.isVisible === true)

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
      <SiteHelmet
        customKeyWords={[
          uniqueContinents.map(continent => (
            `Windsurfing in ${continent}`
          )), 
          windsurfingBlogs.map(blog => {
            return blog.blogTitle
          }),
        ]}
      />

      <StaticMasthead image={mastheadImages} />

      <BlockWrapper>
        <Title 
          title='Destination spot guides' 
          h1 
          centreTitle
          padded
          />
      </BlockWrapper>

      <SimpleMap/>

      <BlockWrapper>
        <section className={`container mx-auto grid grid-cols-1 gap-2 lg:grid-cols-3 ${gapClasses}`}>
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
                  className={`${
                    JSON.stringify(activeFilter) === JSON.stringify(location.filter)
                      ? 'bg-blue text-white '
                      : 'bg-blue-lighter text-blue'
                    } cursor-pointer flex justify-center items-center uppercase text-base lg:text-lg w-full py-2 font-bold`}
                >
                  {location.location}
                </button>
              );
            })}
        </section>

        <section className="pb-20 pt-8 lg:pt-12 container mx-auto">
            <ul className={blogGridClasses}>
              {activeFilter.map((blog) => {
                    return blog.blogLinkData.map((data, index) => {
                      return (
                        <li key={index}>
                          <BlogLink {...data} index={index}/>
                        </li>
                      )
                    });
                  })}
            </ul>
        </section>
      </BlockWrapper>
    </div>
  );
};

export default Destinations;
