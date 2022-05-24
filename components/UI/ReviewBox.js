import React from "react";
import Image from "next/image";
const ReviewBox = ({ imgSrc, reviwText, name, company }) => {
  return (
    <div className=" shdaow-lg rounded-lg p-4 text-center ">
      <div className="mt-0 md:mt-10 mb-10 p-2 w-[140px] h-[140px] mx-auto rounded-full bg-red-600">
        <Image
          src={imgSrc}
          width={130}
          height={130}
          objectFit="contain"
          className="rounded-full "
        />
      </div>
      <p className="text-lg text-gray-600 w-[80%] md:w-[60%] mx-auto">
        {reviwText}
      </p>
      <h1 className="text-xl font-bold mt-3 mb-3">{name}</h1>
      <p className="text-xl text-orange-500 font-bold mt-3 mb-3">{company}</p>
    </div>
  );
};

export default ReviewBox;
