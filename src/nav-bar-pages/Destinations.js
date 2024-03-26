import React, { useState } from "react";
import { spotGuideLinks } from "../Data/spot-guide-links";
import BlogLink from "../components/BlogLink";
import StaticMasthead from "../components/StaticMasthead";
import Title from "../components/Title";
import SiteHelmet from "../components/SiteHelmet";
import BlockWrapper from "../components/BlockWrapper";
import SimpleMap from "../components/simple-maps/SimpleMap";
import { capitalizeFirstLetter } from "../helpers/functions";

const Destinations = () => {
  const mastheadImages = {
    sm: "/images/mastheads/destinations/ben-vulcan-vassiliki-tablet.jpg",
    md: "/images/mastheads/destinations/ben-vulcan-vassiliki-tablet.jpg",
    lg: "/images/mastheads/destinations/ben-vulcan-vassiliki-desktop.jpg",
    alt: "Ben windsrurfing in Vassiliki",
    customClasses:
      "object-cover object-centre lg:object-bottom lg:object-centre",
  };

  const windsurfingBlogs = spotGuideLinks.filter(
    (link) => link.isVisible === true
  );

  // Extract unique countries from SpotGuideLinks
  const uniqueContinents = Array.from(
    new Set(windsurfingBlogs.map((blog) => blog.continent))
  );

  // Generate an array of objects with location and filter
  const windsurfingLocations = uniqueContinents.map((continent) => ({
    location: continent,
    filter: windsurfingBlogs.filter(
      (location) => location.continent === continent
    ),
  }));

  windsurfingLocations.sort((a, b) => a.location.localeCompare(b.location));

  const blogGridClasses = [
    "grid grid-cols-1 lg:grid-cols-3",
    "gap-8 lg:gap-12 xl:gap-12",
  ].join(" ");

  const [activeFilter, setActiveFilter] = useState(windsurfingBlogs);
  
  const handleFilterChange = (event) => {
    const selectedLocation = event.target.value;
    if (selectedLocation === "all") {
      setActiveFilter(windsurfingBlogs);
    } else {
      const filteredBlogs = windsurfingLocations.find(
        (location) => location.location === selectedLocation
        )?.filter;
        setActiveFilter(filteredBlogs || []);
      }
    console.log(event.target.value)
  };

  return (
    <div>
      <SiteHelmet
        customKeyWords={[
          uniqueContinents.map((continent) => `Windsurfing in ${continent}`),
          windsurfingBlogs.map((blog) => {
            return blog.blogTitle;
          }),
        ]}
      />

      <StaticMasthead image={mastheadImages} />

      <BlockWrapper>
        <Title title="Destination spot guides" h1 centreTitle padded />
      </BlockWrapper>
      
      <SimpleMap />

      <BlockWrapper>
        <div className={blogGridClasses}>
          <div className="w-full">
            <label htmlFor="filters" className="sr-only">
              Filter by continent
            </label>
            <select
              id="filters"
              className="w-full pl-2 py-2 border-[1px] border-blue"
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              {windsurfingLocations.map((location, index) => (
                <option key={index} value={location.location}>
                  {location.location.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end lg:col-span-2">
            <p>
              Showing <span className="font-bold">
                {activeFilter.length}
              </span> spot guides <span>
                {activeFilter.length !== windsurfingBlogs.length && `from ${capitalizeFirstLetter(activeFilter[0].continent)}`}
              </span>
            </p>
          </div>
        </div>
      </BlockWrapper>

      <BlockWrapper>
        <ul className={blogGridClasses}>
          {activeFilter.map((blog) =>
            blog.blogLinkData.map((data, index) => (
              <li key={index}>
                <BlogLink {...data} index={index} />
              </li>
            ))
          )}
        </ul>
      </BlockWrapper>
      
    </div>
  );
};

export default Destinations;
