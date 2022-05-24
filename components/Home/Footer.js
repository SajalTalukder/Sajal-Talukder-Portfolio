import React from "react";
const Footer = () => {
  return (
    <div className="mt-16 bg-blue-900 p-4 text-center">
      <div className="flex items-center justify-center pt-10 space-x-4">
        <div className="flex hover:-translate-y-[10px] transform  cursor-pointer transition-all duration-300 items-center justify-center w-12 h-12 rounded-full bg-white p-3">
          <img
            src="/images/linkedin.png"
            className="w-10 h-10 object-contain"
            alt=""
          />
        </div>
        <div className="flex hover:-translate-y-[10px] transform cursor-pointer transition duration-300 items-center justify-center w-12 h-12 rounded-full bg-white p-3">
          <img
            src="/images/facebook.png"
            className="w-10 h-10 object-contain"
            alt=""
          />
        </div>
        <div className="flex hover:-translate-y-[10px] transform cursor-pointer transition duration-300 items-center justify-center w-12 h-12 rounded-full bg-white p-3">
          <img
            src="/images/github.png"
            className="w-10 h-10 object-contain"
            alt=""
          />
        </div>
        <div className="flex hover:-translate-y-[10px] transform cursor-pointer transition duration-300 items-center justify-center w-12 h-12 rounded-full bg-white p-3">
          <img
            src="/images/fiverr.png"
            className="w-10 h-10 object-contain"
            alt=""
          />
        </div>
      </div>
      <p className="text-2xl font-semibold mt-6 mb-3 text-gray-300">
        Web Development
      </p>
      <p className="text-2xl font-semibold  text-gray-300">Privacy Policy</p>
      <p className="text-lg font-semibold text-gray-400 mt-6">
        © 2021 Sajal Talukder
      </p>
    </div>
  );
};

export default Footer;
