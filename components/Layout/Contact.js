import React from "react";
import Heading from "../UI/Heading";
import {
  PhoneIcon,
  HomeIcon,
  ChatAlt2Icon,
  LinkIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";
const Contact = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const bg = isDark ? "bg-black" : "bg-white";
  const textColor1 = isDark ? "text-gray-300" : "text-gray-700";
  const textColor2 = isDark ? "text-gray-300" : "text-gray-600";
  return (
    <div className={` ${bg} pt-12`} id="contact">
      <Heading ft="Contact" st="ME" />
      <div className="grid items-center mt-16 pb-10 grid-cols-1 md:grid-cols-3 w-[90%] md:w-[85%] lg:w-[80%] mx-auto gap-8">
        <div className="col-span-1  space-y-6">
          <div className="flex  items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
              <HomeIcon className="w-6 h-6 text-white " />
            </div>
            <div>
              <p className={`uppercase text-md font-semibold ${textColor1}`}>
                Location
              </p>
              <p className={`text-sm font-semibold ${textColor2}`}>
                Dhaka,Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
              <PhoneIcon className="w-6 h-6 text-white " />
            </div>
            <div>
              <p className={`uppercase text-md font-semibold ${textColor1}`}>
                Phone
              </p>
              <p className={`text-sm font-semibold ${textColor2}`}>
                +8801633734181
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
              <LinkIcon className="w-6 h-6 text-white " />
            </div>
            <div>
              <p className={`uppercase text-md font-semibold ${textColor1}`}>
                Linkedin
              </p>
              <p className={`text-sm font-semibold ${textColor2}`}>
                Sajal Talukder
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
              <ChatAlt2Icon className="w-6 h-6 text-white " />
            </div>
            <div>
              <p className={`uppercase text-md font-semibold ${textColor1}`}>
                Email
              </p>
              <p className={`text-sm font-semibold ${textColor2}`}>
                Sajaltalukder01@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <input
              className="inline-block outline-none bg-gray-300 p-4 rounded-lg w-[100%]"
              type="text"
              placeholder="FullName"
            />
          </div>
          <div>
            <input
              className="inline-block bg-gray-300 outline-none p-4 rounded-lg mt-4   w-[100%]"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4 mt-4">
            <textarea
              placeholder="Message"
              className="placeholder:text-gray-500 outline-none placeholder:text-semibold inline-block textAria rounded-lg p-5 bg-gray-300 w-[100%]"
              cols="20"
              rows="8"
            ></textarea>
          </div>
          <div>
            <button className="btn p-3 text-white text-semibold  px-6 bg-red-500 rounded-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
