import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../../Store/theme-slice";

const Nav = () => {
  const [navSticky, setNavSticky] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  const logoText = navSticky || isDark ? "text-white" : "lg:text-black";
  const lightHandler = () => {
    dispatch(themeAction.lightMode());
  };

  const darkHandler = () => {
    dispatch(themeAction.darkMode());
  };

  const showNavHandler = () => {
    setShowNav(true);
  };
  const hideNavHandler = () => {
    setShowNav(false);
  };
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
        className={` ml-[1rem] sm:ml[2rem] md:ml-[4rem] ${logoText} transition-all  duration-200 font-logo  text-[2rem]`}
      >
        SA<span className="text-yellow-600">JA</span>L
      </div>
      <div className="lg:inline-block">
        <ul
          className={`lg:flex lg:flex-row items-center ${logoText} lg:space-x-8 xl:space-x-16  ${
            showNav ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 text-center text-white z-[1001]  space-y-12 lg:space-y-0 pt-16 lg:pt-0 fixed lg:relative lg:bg-transparent top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-blue-800 lg:text-md transition-all duration-400 font-bold uppercase lg:justify-between`}
        >
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={hideNavHandler}
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
              duration={500}
              onClick={hideNavHandler}
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
              duration={500}
              onClick={hideNavHandler}
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
              duration={500}
              onClick={hideNavHandler}
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
              duration={500}
              onClick={hideNavHandler}
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
              duration={500}
              onClick={hideNavHandler}
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
              duration={500}
              onClick={hideNavHandler}
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
              duration={500}
              onClick={hideNavHandler}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center  mr-[2rem] sm:mr-[4rem] lg:mr-0 space-x-6">
        {!isDark && (
          <SunIcon
            onClick={darkHandler}
            className="w-10 h-10 cursor-pointer text-yellow-600 lg:mr-[4rem]"
          />
        )}
        {isDark && (
          <MoonIcon
            onClick={lightHandler}
            className="w-10 h-10 cursor-pointer text-yellow-600 lg:mr-[4rem]"
          />
        )}
        {!showNav && (
          <MenuAlt3Icon
            onClick={showNavHandler}
            className="w-10 h-10 cursor-pointer  lg:hidden text-yellow-600 ml-[1rem] mr-[1rem] sm:mr[2rem] md:mr-[4rem]"
          />
        )}
        {showNav && (
          <p
            onClick={hideNavHandler}
            className="font-bold text-[2rem] cursor-pointer text-white z-[100000]"
          >
            X
          </p>
        )}
      </div>
    </div>
  );
};

export default Nav;
