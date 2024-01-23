import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navListItems } from "../data/site-data";

const Navbar = () => {
  
  const location = useLocation()
  const isHomePage = location.pathname === '/Homepage'
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => setMobileNav(!mobileNav)
  
  const hideMobileNav = () => {
    setMobileNav(false)
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setMobileNav(false);
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);

  const body = document.getElementById('body')

  useEffect(() => {
    if (mobileNav === true){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

  })

  return (
    <section>
      <div className="relative bg-blue text-white ">
        <div className="container  mx-auto w-full h-[4rem] md:h-[6rem] flex items-center justify-between md:justify-center">
          {isHomePage ? (
            <h1 className="font-title text-4xl md:text-6xl uppercase">
                Seabound souls
            </h1>
          ) : (
            <Link to='/Homepage' className="font-title text-4xl md:text-6xl uppercase">
                Seabound souls
            </Link>
          )}
          <div>
            <button onClick={toggleMobileNav} className=' text-4xl w-full md:hidden '>
              <FontAwesomeIcon
                icon={mobileNav ? faXmark : faBars}
                />
            </button>
          </div>
        </div>
        <ul className={mobileNav ? 'z-50  absolute top-[4rem] pt-8 right-0 w-full flex flex-col space-y-2 h-[calc(100vh-4rem)] bg-white opacity-1 transition duration-300 md:hidden' : 'absolute top-[4rem] right-0 w-0 flex flex-col space-y-2 h-screen bg-white opacity-0 transition duration-300 md:hidden'}>
            {navListItems.map((listItem, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={hideMobileNav}
                    to={listItem.to}
                    className={mobileNav ? 'pl-8 uppercase text-blue' : 'hidden'}
                    >
                    {listItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
      </div>

      <nav className="hidden md:block relative z-10 text-blue border-b-[1px] border-blue">
        <div className="w-full h-[4rem] flex items-center container mx-auto  ">
          <ul className='hidden md:relative md:w-full md:flex md:justify-center md:space-x-8'>
            {navListItems.map((listItem, index) => {
              return (
                <li key={index}>
                    <Link
                      to={listItem.to}
                      className="relative uppercase after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-blue/80 after:transition-all after:duration-300"
                      >
                      {listItem.title}
                    </Link>
                </li>
              );
            })}
          </ul>

          

        </div>
      </nav>
    </section>

  );
};

export default Navbar;
