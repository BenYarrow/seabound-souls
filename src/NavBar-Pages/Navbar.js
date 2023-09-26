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

    <nav className="container mx-auto relative z-10">

      <div className="w-full h-[4rem] flex items-center ">
        
        <div className="w-full flex justify-end md:hidden">
          <button onClick={toggleMobileNav} className='text-blue text-5xl cursor-pointer '>
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
                      className="relative text-xl text-blue font-standard uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-black after:transition-all after:duration-300"
                      >
                      {listItem.title}
                    </Link>
                </div>
              );
            })}
        </div>
          
        
        <div className={mobileNav ? 'absolute top-[4rem] pt-8 pl-8 w-screen h-screen bg-white transition duration-500' : 'absolute top-[4rem] pt-8 pl-8 w-screen h-screen bg-white translate-x-full transition duration-500'}>
            {navListItems.map((listItem, index) => {
              return (
                <div>
                    <Link
                      onClick={hideMobileNav}
                      to={listItem.to}
                      key={index}
                      className="relative text-xl text-blue font-standard uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-black after:transition-all after:duration-300"
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
