import React from "react";
import { useState, useEffect } from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
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

  const [innerWidth, setInnerWidth] =  useState(window.innerWidth)

  useEffect(() => {

    function handleResize() {
      setInnerWidth(window.innerWidth)

      if (innerWidth > 788) {
        setNavIsHidden(true)
      }
  
    } 

    window.addEventListener('resize', handleResize);

  },[innerWidth])


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
        <div className="absolute right-8">
          {
            <FontAwesomeIcon
              icon={faBars}
              onClick={navMenuShow}
              className={
                !navIsHidden 
                  ? "hidden"
                  : "text-standard text-5xl flex md:hidden "
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
                  : "text-standard text-5xl flex md:hidden "
              }
            />
          }
        </div>

        <div className={navIsHidden ? 'hidden md:flex items-center space-x-2 lg:space-x-16 ' : 'w-full absolute top-32 bg-standard/90 z-10 h-auto md:hidden'}>
          {navListItems.map((listItem, index) => {
            return (
              <Link 
                to={listItem.to} 
                className={navIsHidden ? "text-standard font-navbar pr-8 text-xl md:text-3xl xl:text-4xl hover:underline hover:cursor-pointer font-light uppercase tacking-wide" : "block font-standard text-blue text-2xl py-4 border-b-2 border-blue"}
                key={index}
              >
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
