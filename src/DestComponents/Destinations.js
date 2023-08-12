import React, { useState } from "react";
import { Link } from "react-router-dom";
import { continents } from "../Data/Continents";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Css/Destinations.css";

let continentsList = continents
  .map((continent) => {
    continent.countries = JSON.parse(
      JSON.stringify(
        continent.countries.filter((country) => country.isEnabled === true)
      )
    );
    return continent;
  })
  .filter((continents) => continents.countries.length > 0);

const CountryLink = ({ location, area, imageSrc, linkTo }) => {
  
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(true);
  };

  const handleHideVisible = () => {
    setIsVisible(false);
  };

  const visibilityClasses = [
    isVisible
      ? "w-full h-1/4 flex justify-between items-center bg-standard  transition "
      : "translate-y-full w-full h-0",
  ];

  return (
    <div className="shadow-2xl shadow-turquoise/60 rounded-lg group font-standard">
      <Link to={linkTo}>
        <div
          className="aspect-square rounded-lg"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            className="w-full h-full group-hover:bg-standard/40 rounded-lg flex flex-col justify-center items-center overflow-hidden"
            onMouseEnter={handleVisible}
            onMouseLeave={handleHideVisible}
          >
            <div className="w-full h-full flex justify-center items-center ">
              <h1
                id="location"
                className="text-xxxl text-standard absolute "
              >
                {location}
              </h1>
            </div>


              <div className={visibilityClasses}>
                <p className="px-4 text-base text-standard/0 text-turquoise ">
                  While in {location} we stayed in {area}. Check out what we
                  did!{" "}
                </p>
                <div className="w-2/6 h-full flex justify-center items-center group-hover:bg-turquoise/100 group-hover:rounded-br-lg ">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-icon text-standard/0  group-hover:text-standard/100 "
                  />
                </div>
              </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Continents = (props) => {
  return (
    <div className="w-full h-auto pb-20">
      <div className="flex justify-center items-center md:justify-start py-8">
        <h2 className="text-xl">{props.title}</h2>
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-3 gap-8 ">
        {props.countries.map((country) => (
          <CountryLink {...country} />
        ))}
      </div>
    </div>
  );
};

const Destinations = () => {
  return (
    <div className="container text-turquoise ">
      <div className="text-center border-b-2 border-turquoise">
        <h1 className="text-xxl lg:text-xxxl">Destinations</h1>
      </div>
      <div>
        {continentsList.map((continent) => {
          return (
            <div className="border-b-2 border-turquoise ">
              <Continents
                countries={continent.countries}
                title={continent.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;
