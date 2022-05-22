import React from "react";
import Heading from "../UI/Heading";
import BlogBox from "../UI/BlogBox";
const Blog = () => {
  return (
    <div className="mt-32 bg-gray-300 pb-10">
      <div className="pt-10">
        <Heading ft="My" st="Blog" />
      </div>
      <div className="grid  mt-16 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <BlogBox
          imgSrc="/images/2.png"
          title="How to Build Responsive React Website"
          date="02 FEB 2022"
          share="13"
          com="19"
        />
        <BlogBox
          imgSrc="/images/3.png"
          title="How to Use Redux In React App with Example"
          date="02 MAY 2022"
          share="10"
          com="12"
        />
        <BlogBox
          imgSrc="/images/1.png"
          title="How to Build Next js E-Commerce App"
          date="02 JULY 2022"
          share="19"
          com="22"
        />
      </div>
    </div>
  );
};

export default Blog;
