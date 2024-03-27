import React, { useState } from "react";
import { spotGuideLinks } from "../Data/spot-guide-links";
import BlogLink from "../components/BlogLink";
import StaticMasthead from "../components/StaticMasthead";
import Title from "../components/Title";
import SiteHelmet from "../components/SiteHelmet";
import BlockWrapper from "../components/BlockWrapper";
import { capitalizeFirstLetter } from "../helpers/functions";
import LeafletMap from "../components/api-weather-components/LeafletMap";
import { destinationCoordinates } from "../Data/destinations-coordinate-data";

const InfoModelContent = () => (
  <div class="flex flex-col gap-y-2">
    <p>
      Use our interactive map to navigate the earth to find the location you're looking for. Click on a marker to view the name of the location, from there you can navigate to that specific spot guide.
    </p>
    <p>
        The light blue is representative of land, with borders being seperated via the white lines. The darker blue areas are national parks, and the black lines are road networks.
    </p>
    <small>
        This map uses data provided by Mapbox.
    </small>
  </div>
)

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
  const mapMarkers = destinationCoordinates.map(destination => destination.marker)

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

      
      <Title title="Destination spot guides" h1 centreTitle/>
      
      
      <LeafletMap
        lat={10}
        long={20}
        zoom={2}
        markers={mapMarkers}
        infoModalContent={<InfoModelContent />}
      />


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
