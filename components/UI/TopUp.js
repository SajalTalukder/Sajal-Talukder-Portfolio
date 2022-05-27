import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

const TopUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 500) {
        setShow(true);
      }
      if (window.scrollY <= 500) {
        setShow(false);
      }
    });
  }, []);
  return (
    <div
      className={`fixed transition-all duration-300 bottom-[4rem] right-6 ${
        show ? "" : "hidden"
      }`}
    >
      <Link to="home" spy={true} smooth={true} duration={600}>
        <div className="flex animate-bounce transform cursor-pointer transition duration-300 items-center justify-center w-12 h-12 rounded-full bg-red-500 p-3">
          <ArrowUpIcon className="w-10 h-10 text-white" />
        </div>
      </Link>
    </div>
  );
};

export default TopUp;
