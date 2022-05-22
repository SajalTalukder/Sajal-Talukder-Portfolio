import React from "react";
import Nav from "../Layout/Nav";
import Image from "next/image";
import { CheckCircleIcon, DownloadIcon } from "@heroicons/react/solid";
import TypeWrite from "../Utils/TypeWrite";
const Header = () => {
  return (
    <div className="bg-1 w-[100vw] h-[100vh] ">
      <Nav />
      <div className="grid items-center grid-cols1 md:grid-cols-2 gap-4 h-[85%] w-[80%] mx-auto">
        <div className="text-white">
          <h1 className="font-extrabold text-[2rem] md:text-[3rem] text-yellow-600 uppercase">
            I'M <span className="text-black">sajal</span>
          </h1>
          <h1 className="font-extrabold text-[1.6rem] text-green-600 md:text-[1.8rem] lg:text-[2.5rem] uppercase">
            <TypeWrite />
          </h1>
          <p className="text-gray-600 text-md ">
            Hi, I am sajal talukder, a front-end web developer and a passionate
            programmer. I have a strong understanding of Next js and React js. I
            have one year of experience in React js and Next js.I believe in
            being highly responsive to clients and providing premium quality
            work every time
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 mt-10 md:w-[100%] lg:w-[100%] space-x-2 xl:w-[80%] justify-between items-center">
            <button className="bg-sky-600 btn p-3 px-6 flex  items-center  font-bold uppercase rounded-full">
              <span>
                <CheckCircleIcon className="h-4 w-4 text-white" />
              </span>
              <span className=" ml-2">Hire Me</span>
            </button>
          </div>
        </div>
        <div className="relative w-[90%] h-[90%] hidden md:inline-block text-center">
          <Image src="/images/hero1.png" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Header;
