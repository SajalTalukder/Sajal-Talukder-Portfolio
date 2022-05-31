import React from "react";
import { useSelector } from "react-redux";

const Heading = ({ ft, st }) => {
  const isDark = useSelector((state) => state.theme.isDark);
  const textColor = isDark ? "text-white" : "text-gray-800";

  return (
    <h1
      className={`relative ${textColor} uppercase overflow-hidden text-center text-[1.8rem] sm:text-[2rem] md:text-[2.5rem]  font-bold `}
    >
      {ft} <span className="text-yellow-500">{st}</span>
    </h1>
  );
};

export default Heading;
