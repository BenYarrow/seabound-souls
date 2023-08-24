import React from "react";
import { useState, useEffect } from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { continents } from "./Data/Continents";

const Navbar = () => {

  const destinationsPage = [
    {
      title: "Destinations",
      to: "/Destinations",
    },
  ];

  const destinationDropdown = continents.map((continent) => {
    return continent;
  });

  const [isHovered, setIshovered] = useState(false);

  const handleMouseEnter = () => {
    setIshovered(true);
  };

  const handleMouseLeave = () => {
    setIshovered(false);
  };

  const navListItems = [
    {
      title: "Blog",
      to: "/BlogPage",
    },
    {
      title: "About Us",
      to: "/AboutUs",
    },
    {
      title: "Contact us",
      to: "/ContactUs",
    },
  ];

  const [navIsHidden, setNavIsHidden] = useState(true);

  const navMenuShow = () => setNavIsHidden(false);

  const navMenuHide = () => setNavIsHidden(true);


  useEffect(() => {

    function handleResize() {

      if (window.innerWidth > 788) {
        setNavIsHidden(true);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen sticky left-0 z-20">
      <nav
        id="navbar"
        className="w-full lg:px-20 h-32 flex items-center justify-between border-b-2 border-standard "
      >
        <div className="w-48 md:w-60 relative left-8">
          <Link to="/Homepage" onClick={navMenuHide}>
            <img
              src="/Personal-Images/yarrow-travels-logo.png"
              alt="Seabound Souls Logo"
            />
          </Link>
        </div>
        <div className="absolute right-8 md:hidden ">
          {
            <FontAwesomeIcon
              icon={faBars}
              onClick={navMenuShow}
              className={
                !navIsHidden
                  ? "hidden"
                  : "text-standard text-5xl flex "
              }
            />
          }
          {
            <FontAwesomeIcon
              icon={faXmark}
              onClick={navMenuHide}
              className={
                navIsHidden
                  ? "hidden"
                  : "text-standard text-5xl flex  "
              }
            />
          }
        </div>

        <div
          className={
            navIsHidden
              ? "hidden md:!flex items-center space-x-8 xl:space-x-16 pr-8 "
              : "w-full absolute top-32 bg-standard/90 z-10 h-auto md:hidden"
          }
        >
          {destinationsPage.map((destinations, index) => {
            return (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {" "}
                <Link
                  to={destinations.to}
                  className={
                    navIsHidden
                      ? "text-standard font-title text-xl md:text-3xl xl:text-4xl hover:underline hover:cursor-pointer font-light uppercase tacking-wide "
                      : "block font-standard text-blue text-2xl py-4 border-b-2 border-blue"
                  }
                  key={index}
                >
                  {destinations.title}
                </Link>
                <div className=" hidden md:block absolute ">
                  {destinationDropdown.map((drop, index) => {
                    return (
                      <>
                        {isHovered && (
                          <ul className="bg-standard " key={index}>
                            <li className="py-2 group hover:bg-blue">
                              <Link
                                to={drop.linkTo}
                                className="text-blue font-title  text-xl md:text-3xl xl:text-4xl hover:cursor-pointer font-light uppercase tacking-wide group-hover:text-standard  "
                              >
                                {drop.title}
                              </Link>
                            </li>
                          </ul>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {navListItems.map((listItem, index) => {
            return (
              <Link
                to={listItem.to}
                className={
                  navIsHidden
                    ? "text-standard font-title  text-xl md:text-3xl xl:text-4xl hover:underline hover:cursor-pointer font-light uppercase tacking-wide"
                    : "block font-standard text-blue text-2xl py-4 border-b-2 border-blue"
                }
                key={index}
              >
                {listItem.title}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
