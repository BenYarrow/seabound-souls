import React from "react";
import { Link } from "react-router-dom";
import { continents } from "../Data/Continents";

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
  return (
    <div className=" group font-standard ">
      <Link to={linkTo}>
        <div
          className="aspect-square group "
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full flex justify-center items-center group-hover:bg-blue/40  ">
            <div className="">
              <h2
                id="location"
                className="font-destinations text-standard text-center text-4xl md:text-6xl group-hover:text-8xl "
              >
                {location}
              </h2>
            </div>
          </div>
        </div>
      </Link>
        <p className="py-4 text-md text-blue ">
          While in {location} we stayed in {area}. 
        </p>
    </div>
  );
};

const Continents = (props) => {
  return (
    <div className="w-full h-auto pb-10">
      <div className="flex justify-center items-center md:justify-start py-8">
        <h2 className="text-4xl">{props.title}</h2>
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
    <div className="container text-blue ">
      <div className="text-center border-b-2 border-blue py-8">
        <h1 className="text-4xl lg:text-6xl">Destinations</h1>
      </div>
      <div>
        {continentsList.map((continent) => {
          return (
            <div className="border-b-2 border-blue ">
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
