import React from "react";
import Image from "next/image";
import Link from "next/link";
const ServiceCard = ({ sImage, nText, cText, details, num, mt }) => {
  return (
    <div
      className={`bg-white relative ${
        mt ? "lg:-translate-y-10 " : ""
      } service p-6 transform text-center  shadow-md  shadow-gray-400 rounded-lg transition duration-200 hover:shadow-lg`}
    >
      <p className="absolute top-3 text-white font-bold text-[1.3rem] right-4">
        {num}
      </p>
      <div className="mt-6">
        <Image src={sImage} width={80} height={80} objectFit="contain" />
      </div>
      <p className="text-[1.6rem] textH text-gray-800 uppercase font-bold mt-[1.4rem]">
        {nText} <span className="text-orange-600 textC">{cText}</span>
      </p>
      <p className="mt-5 textD text-gray-600 text-sm">{details}</p>
      <Link href={`https://www.fiverr.com/sajal_talukder`}>
        <a target="_blank">
          <button className="btn px-8 py-2 mt-6 bg-purple-700 rounded-full text-white font-semibold">
            Details
          </button>
        </a>
      </Link>
    </div>
  );
};

export default ServiceCard;
