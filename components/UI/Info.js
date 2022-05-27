import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";

const Info = () => {
  return (
    <div>
      <h1 className="text-[1.3rem] md:text-[1.8rem] mb-5 md:mb-10 text-gray-800 font-bold uppercase">
        Personal infos
      </h1>
      <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-10 md:space-x-24">
        <div className="space-y-6">
          <p className="text-gray-800 font-semibold">
            First Name :<span className="text-gray-900 font-bold"> Sajal</span>
          </p>
          <p className="text-gray-800 font-semibold">
            Last Name :
            <span className="text-gray-900 font-bold"> Talukder</span>
          </p>

          <p className="text-gray-800 font-semibold">
            Freelance :
            <span className="text-gray-900 font-bold"> Available</span>
          </p>
          <p className="text-gray-800 font-semibold">
            Phone :
            <span className="text-gray-900 font-bold">+8801633734181</span>
          </p>
          <p className="text-gray-800 font-semibold">
            Linkedin :
            <span className="text-gray-900 font-bold"> Sajal Talukder</span>
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-gray-800 font-semibold">
            Age : <span className="text-gray-900 font-bold">21 Years</span>
          </p>
          <p className="text-gray-800 font-semibold">
            Nationality :{" "}
            <span className="text-gray-900 font-bold"> Bangladeshi</span>
          </p>
          <p className="text-gray-800 font-semibold">
            Address :
            <span className="text-gray-900 font-bold">Dhaka,Bangladesh</span>
          </p>
          <p className="text-gray-800 font-semibold">
            Email :
            <span className="text-gray-900 font-bold">
              sajaltalukder01@gmail.com
            </span>
          </p>
          <p className="text-gray-800 font-semibold">
            Language :
            <span className="text-gray-900 font-bold">
              Bangla,English,Hindi
            </span>
          </p>
        </div>
      </div>
      <a href="/scv.pdf" download>
        <button className="bg-orange-700 btn p-3 px-6 flex items-center mt-16 font-bold uppercase rounded-full">
          <DownloadIcon className="h-4 w-4 text-white" />
          <span className="ml-2 text-white">Download cv</span>
        </button>
      </a>
    </div>
  );
};

export default Info;
