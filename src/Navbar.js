import React from "react";
import { useState, useEffect } from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowAltCircleRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";





const Navbar = () => {

  const navListItems = [
    {
      title: 'Destinations',
      to: '/Destinations',
    },
    {
      title: 'Our work',
      to: '/OurWork',
    },
    {
      title: 'Contact us',
      to: '/ContactUs',
    },
  ]

  const [navIsHidden, setNavIsHidden] = useState(true);

  const navMenuShow = () => setNavIsHidden(false);

  const navMenuHide = () => setNavIsHidden(true);

  return (
    <div className="w-screen">
      <nav
        id="navbar"
        className="w-full px-8 lg:px-20 h-32 flex items-center justify-between border-b-2 border-standard  "
      >
        <div className="w-48">
          <Link to="/Homepage" className="" onClick={navMenuHide}>
            <img
              src="/Personal-Images/yarrow-travels-logo.png"
              className=""
              alt="Yarrow Travels Logo"
            />
          </Link>
        </div>
        <div className="absolute right-8">
          {
            <FontAwesomeIcon
              icon={faBars}
              onClick={navMenuShow}
              className={
                navIsHidden === false
                  ? "hidden"
                  : "text-standard text-xxxl flex md:hidden "
              }
            />
          }
          {
            <FontAwesomeIcon
              icon={faXmark}
              onClick={navMenuHide}
              className={
                navIsHidden === true
                  ? "hidden"
                  : "text-standard text-xxxl flex md:hidden "
              }
            />
          }
        </div>

        <div className={navIsHidden ? 'hidden md:flex items-center space-x-8' : 'w-full absolute top-32 bg-standard/90 z-10 h-auto md:hidden'}>
          {navListItems.map(listItem => {
            return (
              <Link to={listItem.to} className={navIsHidden ? "text-standard text-xl md:text-xl lg:text-xxl hover:underline hover:cursor-pointer font-light " : "w-full h-auto flex justify-between items-center font-standard text-turquoise text-xxl py-4 border-b-2 border-turquoise"}>
                {listItem.title}
              </Link>
            )
          })}
        </div>


      </nav>
    </div>
  );
};

export default Navbar;
