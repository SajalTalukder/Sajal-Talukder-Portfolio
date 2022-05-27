import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

const Nav = () => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 100) {
        setNavSticky(true);
      }
      if (window.scrollY <= 100) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`flex fixed w-[100%] transition-all duration-200 z-[1000] ${
        navSticky ? "bg-gray-800" : ""
      } items-center justify-between h-[10vh]`}
    >
      <div
        className={` ml-[1rem] sm:ml[2rem] md:ml-[4rem] ${
          navSticky ? "text-white" : "text-black"
        } transition-all duration-200 font-logo  text-[2rem]`}
      >
        SA<span className="text-yellow-600">JA</span>L
      </div>
      <div className="hidden lg:inline-block">
        <ul
          className={`flex items-center ${
            navSticky ? "text-white" : "text-black"
          } lg:space-x-8 xl:space-x-16 text-md transition-all duration-200 font-bold uppercase justify-between`}
        >
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              portfolio
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="price"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              price
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="review"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              review
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              blog
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center  mr-[2rem] sm:mr-[4rem] lg:mr-0 space-x-6">
        <SunIcon className="w-10 h-10 text-yellow-600 lg:mr-[4rem]" />
        <MenuAlt3Icon className="w-10 h-10  lg:hidden text-yellow-600 ml-[1rem] mr-[1rem] sm:mr[2rem] md:mr-[4rem]" />
      </div>
    </div>
  );
};

export default Nav;
