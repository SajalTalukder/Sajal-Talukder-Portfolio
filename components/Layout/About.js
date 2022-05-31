import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";
import ExpInfo from "../UI/ExpInfo";
import Heading from "../UI/Heading";
import Info from "../UI/Info";
import Skills from "../UI/Skills";
import { useSelector } from "react-redux";

const About = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const bg = isDark ? "bg-black" : "bg-white";
  return (
    <div className={`-mt-28 -z-50 ${bg}`} id="about">
      <div className="w-[80%] mx-auto  pt-20  lg:pt-32 ">
        <Heading ft="About" st="ME" />
      </div>
      <div className="flex lg:w-[90%] space-y-8 xl:w-[80%] flex-col lg:flex-row mx-auto mt-[2rem] md:mt-[4rem] items-center justify-between gap-6">
        <Info />
        <ExpInfo />
      </div>
      <div className=" p-6 mt-16 pb-32">
        <Heading ft="my" st="skills" />
        <Skills />
      </div>
    </div>
  );
};

export default About;
