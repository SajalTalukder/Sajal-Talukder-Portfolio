import React from "react";
import { CalendarIcon, ShareIcon, ChatAlt2Icon } from "@heroicons/react/solid";

const BlogBox = ({ imgSrc, date, share, title, com }) => {
  return (
    <div className="shadow-md hover:shadow-xl transform transiton-all duration-300 hover:-translate-y-[20px] rounded-lg overflow-hidden">
      <div>
        <img
          src={imgSrc}
          alt="blog"
          className="w-[100%] bg-white h-[18rem] object-contain"
          loading="lazy"
        />
      </div>
      <div>
        <div className="p-4 bg-gray-200 font-bold text-gray-600">
          <div className="flex mt-5 mb-3 items-center justify-between">
            <div className="flex items-center space-x-1">
              <CalendarIcon className="w-5 h-5 text-orange-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ShareIcon className="w-5 h-5 text-orange-500" />
              <span>{share} Share</span>
            </div>
          </div>
          <h1 className="text-lg mb-2 mt-2">{title}</h1>
          <div className="flex mb-3 mt-5 items-center justify-between">
            <button className="p-2 hover:bg-red-600 transition duration-200 text-sm bg-black text-white font-semibold rounded-lg">
              Read More
            </button>
            <div className="flex items-center space-x-1">
              <ChatAlt2Icon className="w-5 h-5 text-orange-500" />
              <span>{com} Comment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
