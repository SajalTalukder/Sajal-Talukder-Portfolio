import React from "react";
import Heading from "../UI/Heading";

import Table from "../UI/Table";
const Price = () => {
  return (
    <div className="bg-gray-200  pt-10">
      <Heading ft="My" st="price" />
      <div className="grid mt-24 grid-cols-1 pb-20 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] mx-auto">
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
  );
};

export default Price;
