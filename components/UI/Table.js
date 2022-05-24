import React from "react";
import { CheckCircleIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
const Table = ({ type, price, s1, s2, s3, s4, s5, scale, bg }) => {
  return (
    <div
      className={`bg-white ${
        scale ? "lg:scale-110 z-50" : "lg:scale-100 z-0"
      } overflow-hidden transform rounded-lg shadow-lg shadow-gray-400`}
    >
      <div className={`${bg}`}>
        <h2 className="text-[1.7rem] font-bold text-white uppercase text-center p-6">
          {type}
        </h2>
        <div className="w-[90%] h-[1px] mx-auto bg-gray-300"></div>
        <h2 className="text-white p-6 uppercase font-bold text-[3rem] text-center">
          {price}
        </h2>
      </div>
      <div className="p-4 pl-12 mt-8 mb-6 rounded-b-lg space-y-6">
        <div className="flex items-center space-x-5">
          <CheckCircleIcon className="w-6 h-6 text-pink-600" />
          <span className="font-semibold  text-lg text-gray-600">{s1}</span>
        </div>
        <div className="flex items-center space-x-5">
          <CheckCircleIcon className="w-6 h-6 text-pink-600" />
          <span className="font-semibold  text-lg text-gray-600">{s2}</span>
        </div>
        <div className="flex items-center space-x-5">
          <CheckCircleIcon className="w-6 h-6 text-pink-600" />
          <span className="font-semibold  text-lg text-gray-600">{s3}</span>
        </div>
        <div className="flex items-center space-x-5">
          <CheckCircleIcon className="w-6 h-6 text-pink-600" />
          <span className="font-semibold  text-lg text-gray-600">{s4}</span>
        </div>
        <div className="flex items-center space-x-5">
          <CheckCircleIcon className="w-6 h-6 text-pink-600" />
          <span className="font-semibold  text-lg text-gray-600">{s5}</span>
        </div>
      </div>
      <div className="text-center mb-10">
        <button className="btn flex items-center space-x-2 mx-auto p-3 rounded-full px-6 text-white bg-blue-700">
          <PaperAirplaneIcon className="w-4 h-4 " />
          <span> PURCHASE PLAN</span>
        </button>
      </div>
    </div>
  );
};

export default Table;
