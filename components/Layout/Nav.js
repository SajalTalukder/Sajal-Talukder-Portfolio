import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import Image from "next/image";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between h-[10vh]">
      <div className="ml-[4rem] text-black font-logo text-[2rem]">
        SA<span className="text-yellow-600">JA</span>L
      </div>
      <div className="hidden lg:inline-block">
        <ul className="flex items-center lg:space-x-8 xl:space-x-16 text-md text-black font-bold uppercase justify-between">
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            Home
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            About
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            services
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            portfolio
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            price
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            reviews
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition duration-200">
            contact
          </li>
        </ul>
      </div>
      <div>
        <SunIcon className="w-10 h-10 text-yellow-600 mr-[4rem]" />
      </div>
    </nav>
  );
};

export default Nav;
