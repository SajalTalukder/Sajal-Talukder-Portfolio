import React from "react";
import Heading from "../UI/Heading";
import BlogBox from "../UI/BlogBox";
import { useSelector } from "react-redux";
const Blog = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const bg = isDark ? "bg-black" : "bg-gray-300";
  return (
    <div className={`pt-20 md:mt-28 ${bg} lg:mt-32  pb-10`} id="blog">
      <div className="pt-10">
        <Heading ft="My" st="Blog" />
      </div>
      <div className="grid pb-10 mt-8 md:mt-12 lg:mt-16 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <div data-aos="flip-left" data-aos-delay="500">
          <BlogBox
            imgSrc="/images/2.png"
            title="How to Build Responsive React Website"
            date="02 FEB 2022"
            share="13"
            com="19"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="500">
          <BlogBox
            imgSrc="/images/3.png"
            title="How to Use Redux In React App with Example"
            date="02 MAY 2022"
            share="10"
            com="12"
          />
        </div>

        <div data-aos="flip-right" data-aos-delay="500">
          <BlogBox
            imgSrc="/images/1.png"
            title="How to Build Next js E-Commerce App"
            date="02 JULY 2022"
            share="19"
            com="22"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
