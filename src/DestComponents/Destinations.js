import React from "react";
import { Link } from "react-router-dom";
import { continents } from "../Data/Continents";
import Heading from "../Components/Heading";

const continentsList = continents.filter(
    (continent) => continent.countries.some((country) => country.isEnabled)
  )

const comingSoonList = continents.map(
    (continent) => continent.countries.filter((country) => !country.isEnabled)
).flat(1)



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
          <div className="w-full h-full flex justify-center items-center group-hover:bg-blue/60  ">
            <div className="">
              <h2
                id="location"
                className="font-destinations text-standard text-center text-4xl md:text-6xl  "
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
        {props.countries.filter(country => country.isEnabled).map((country) => (
          <CountryLink {...country} />
        ))}
      </div>
    </div>
  );
};

const ComingSoon = ({ location, imageSrc }) => {
  return (
    <div className="w-80 pb-20">
        <div
          className="aspect-square"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full flex justify-center items-center">
              <h2
                className="font-destinations text-standard text-center text-4xl"
              >
                {location}
              </h2>
          </div>
        </div>

    </div>
  );
};

const Destinations = () => {

  return (
    <div className="w-full pt-[12rem] px-20 text-blue ">
      <div className="text-left border-b-2 border-blue py-8">
        <Heading
          title='destinations'
        />
      </div>
      <div>
        {continentsList.map((continent, index) => {
          return (
            <div className="border-b-2 border-blue " key={index}>
              <Continents
                countries={continent.countries}
                title={continent.title}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col">
        <Heading
          title='coming soon'
        />
        <div className="w-full flex justify-center gap-4">
          {comingSoonList.map(country => {
            return(
              <div>
                <ComingSoon {...country} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
