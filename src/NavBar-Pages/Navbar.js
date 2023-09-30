import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import AnimateHeight from "react-animate-height";

const Navbar = () => {
  
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => setMobileNav(!mobileNav)

  const showMobileNav = () => {
    setMobileNav(true)
  }
  
  const hideMobileNav = () => {
    setMobileNav(false)
  }

  const navListItems = [
    {
      title: "Home",
      to: "/Homepage",
    },
    {
      title: "About Us",
      to: "/AboutUs"
    },
    {
      title: "Destinations",
      to: "/Destinations",
    },
    {
      title: "Blog",
      to: "/Blog",
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

    <nav className="relative z-10 ">

      <div className=" w-full h-[4rem] flex items-center container mx-auto ">
        
        <div className="w-full flex justify-end md:hidden ">
          <button onClick={toggleMobileNav} className=' text-5xl cursor-pointer'>
            <FontAwesomeIcon
              icon={mobileNav ? faXmark : faBars}
            />
          </button>
        </div>

        <div className='hidden md:relative md:w-full md:flex md:justify-center md:space-x-8'>
          {navListItems.map((listItem, index) => {
            return (
              <div>
                  <Link
                    to={listItem.to}
                    key={index}
                    className="relative text-xl   uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-blue after:transition-all after:duration-300"
                    >
                    {listItem.title}
                  </Link>
              </div>
            );
          })}
        </div>

        <div className={mobileNav ? 'absolute top-[4rem] right-0 w-11/12 flex flex-col space-y-2 h-[calc(100vh-4rem)] bg-white opacity-1 transition duration-300 md:hidden' : 'absolute top-[4rem] right-0 w-11/12 flex flex-col space-y-2 h-screen bg-white opacity-0 transition duration-300 md:hidden'}>
          {navListItems.map((listItem, index) => {
            return (
              <div className="">
                <Link
                  onClick={hideMobileNav}
                  to={listItem.to}
                  key={index}
                  className='text-xl   uppercase pl-8 opacity-1 transition duration-300'
                  >
                  {listItem.title}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </nav>

  );
};

export default Navbar;
