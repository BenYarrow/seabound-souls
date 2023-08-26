import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => setMobileNav(!mobileNav)

  const navListItems = [
    {
      title: "About",
      to: "/AboutUs",
    },
    {
      title: "Destinations",
      to: "/Destinations",
    },
    {
      title: "Blog",
      to: "#",
    },
    {
      title: "Contact",
      to: "/ContactUs",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setMobileNav(false);
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);

  console.log(mobileNav)


  return (
      <nav className={mobileNav ? 'relative bg-white' : 'absolute w-full bg-transparent'}>
              <div className="w-full h-[10rem] flex justify-between md:justify-center items-center">

                <Link to="/Homepage" className="">
                  <img
                    src="/Personal-Images/logo.png"
                    alt="Seabound Souls Logo"
                    className="w-72"
                  />
                </Link>

                <button onClick={toggleMobileNav} className='text-black text-5xl cursor-pointer pr-8 md:hidden '>
                  <FontAwesomeIcon
                    icon={!mobileNav ? faBars : faXmark}
                  />
                </button>

              </div>
                
              <div className={mobileNav ? 'h-[calc(100vh-10rem)] flex flex-col justify-evenly pl-8' : 'hidden md:flex md:justify-center md:space-x-16 uppercaset text-3xl font-title'}>
                  {navListItems.map((listItem, index) => {
                    return (
                        <Link
                          to={listItem.to}
                          key={index}
                          className="text-3xl font-title"
                        >
                          {listItem.title}
                        </Link>
                    );
                  })}
              </div>
        </nav>
  );
};

export default Navbar;
