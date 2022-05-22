import React from "react";

const ExpInfo = () => {
  return (
    <div className="grid grid-cols-1 space-y-6 sm:space-y-0 sm:grid-cols-2 items-center sm:gap-8">
      <div className="exp">
        <p className="text-[3rem] text-yellow-300 font-bold">
          2<sup>+</sup>
        </p>
        <p className="text-[1rem] font-bold text-white uppercase">
          <span className="text-[2rem] text-yellow-300 mr-3">-</span>Years of{" "}
          <br /> Experience
        </p>
      </div>
      <div className="exp transform  sm:-translate-y-[3rem]">
        <p className="text-[3rem] text-yellow-300 font-bold">
          16<sup>+</sup>
        </p>
        <p className="text-[1rem] font-bold text-white uppercase">
          <span className="text-[2rem] text-yellow-300 mr-3">-</span>
          Completed
          <br /> Projects
        </p>
      </div>
      <div className="exp">
        <p className="text-[3rem] text-yellow-300 font-bold">
          10<sup>+</sup>
        </p>
        <p className="text-[1rem] font-bold text-white uppercase">
          <span className="text-[2rem] text-yellow-300 mr-3">-</span>Happy
          <br />
          Clients
        </p>
      </div>
      <div className="exp transform sm:-translate-y-[3rem]">
        <p className="text-[3rem] text-yellow-300 font-bold">
          2<sup>+</sup>
        </p>
        <p className="text-[1rem] font-bold text-white uppercase">
          <span className="text-[1.7rem] text-yellow-300 mr-3">-</span>
          AWARDS
          <br /> won
        </p>
      </div>
    </div>
  );
};

export default ExpInfo;
