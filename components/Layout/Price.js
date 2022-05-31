import React from "react";
import { useSelector } from "react-redux";
import Heading from "../UI/Heading";

import Table from "../UI/Table";
const Price = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const bg = isDark ? "bg-black" : "bg-gray-200";
  return (
    <div className={`${bg}  pt-10`} id="price">
      <Heading ft="My" st="price" />
      <div className="grid  gap-6 lg:gap-0 mt-10 md:mt-20 lg:mt-24 grid-cols-1 pb-20 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] mx-auto">
        <div data-aos="fade-right" data-aos-delay="300">
          <Table
            type="Basic"
            price="20$"
            s1="One Page React Website"
            s2="Responsive Design"
            s3="Fast Loading"
            s4="Four Section"
            s5="Unlimited Revision"
            bg="t1"
          />
        </div>
        <div data-aos="zoom-out" data-aos-delay="300">
          <Table
            type="STANDERD"
            price="60$"
            s1="Three Page React Website"
            s2="Responsive Design"
            s3=" User Authentication"
            s4="Seven Section"
            s5="Unlimited Revision"
            scale
            bg="t2"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="relative -z[1000]"
        >
          <Table
            type="PREMIUM"
            price="100$"
            s1="Five Page React Website"
            s2="Responsive Design"
            s3="User Authentication"
            s4=" Redux State Management"
            s5="Unlimited Revision"
            bg="t3"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
