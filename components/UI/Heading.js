import React from "react";

const Heading = ({ ft, st }) => {
  return (
    <h1 className="relative uppercase overflow-hidden text-center text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] text-gray-800 font-bold">
      {ft} <span className="text-yellow-500">{st}</span>
    </h1>
  );
};

export default Heading;
