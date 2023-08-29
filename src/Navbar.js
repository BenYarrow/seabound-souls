import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import AnimateHeight from "react-animate-height";

const Navbar = () => {
  
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => setMobileNav(!mobileNav)

  const hideMobileNav = () => {
    setMobileNav(false)
  }
  // const [height, setHeight] = useState(false);

  const navListItems = [
    {
      title: "About",
      to: "/AboutUs",
    },
    {
      title: "Travel",
      to: "/Travel",
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



  return (
      <nav className={mobileNav ? 'relative bg-white' : 'absolute w-full bg-transparent'}>
              <div className="w-full h-[9rem] flex justify-between md:justify-center items-center">
                
                <button onClick={hideMobileNav}>
                  <Link to="/Homepage">
                    <img
                      src="/Personal-Images/logo.png"
                      alt="Seabound Souls Logo"
                      className="w-72"
                    />
                  </Link>
                </button>

                <button onClick={toggleMobileNav} className='text-black text-5xl cursor-pointer pr-8 md:hidden '>
                  <FontAwesomeIcon
                    icon={!mobileNav ? faBars : faXmark}
                  />
                </button>

              </div>
                
              <div className={mobileNav ? 'h-[calc(100vh-9rem)] flex flex-col justify-evenly items-start pl-8' : 'hidden md:flex md:justify-center md:space-x-20 lg:space-x-32'}>
                  {navListItems.map((listItem, index) => {
                    return (
                      <button onClick={hideMobileNav}>
                        <Link
                          to={listItem.to}
                          key={index}
                          className="relative text-xl font-standard uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-black after:transition-all after:duration-300"
                        >
                          {listItem.title}
                        </Link>
                      </button>
                    );
                  })}

                  {}
              </div>
        </nav>
  );
};

export default Navbar;
