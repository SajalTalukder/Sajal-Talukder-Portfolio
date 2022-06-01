import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Heading from "../UI/Heading";

import ServiceCard from "../UI/ServiceCard";
const Services = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const bg = isDark ? "bg-black" : "bg-gray-200";
  return (
    <div className={`${bg} pt-10`} id="service">
      <Heading ft="MY" st="services" />
      <div className="grid mt-16 md:mt-20 lg:mt-28 pb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[85%] lg:w-[80%] mx-auto gap-8">
        <div data-aos="fade-right" data-aos-delay="200">
          <ServiceCard
            sImage="/images/atom.png"
            cText="Website"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rerum aliquid! Eius illo laudantium earum quae tempora autem cupiditate quaerat quo nam iste, neque harum aperiam facere similique provident voluptas."
            nText="React"
            num="01"
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <ServiceCard
            sImage="/images/nextjs.png"
            cText="Website"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rerum aliquid! Eius illo laudantium earum quae tempora autem cupiditate quaerat quo nam iste, neque harum aperiam facere similique provident voluptas."
            nText="Next Js"
            color="yellow"
            num="02"
            mt
          />
        </div>

        <div data-aos="fade-left" data-aos-delay="200">
          <ServiceCard
            sImage="/images/sass.png"
            cText="Page"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rerum aliquid! Eius illo laudantium earum quae tempora autem cupiditate quaerat quo nam iste, neque harum aperiam facere similique provident voluptas."
            nText="Landing"
            num="03"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <ServiceCard
            sImage="/images/html.png"
            cText="Fixing"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rerum aliquid! Eius illo laudantium earum quae tempora autem cupiditate quaerat quo nam iste, neque harum aperiam facere similique provident voluptas."
            nText="BUG"
            num="04"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <ServiceCard
            sImage="/images/js.png"
            cText="Website"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rerum aliquid! Eius illo laudantium earum quae tempora autem cupiditate quaerat quo nam iste, neque harum aperiam facere similique provident voluptas."
            nText="Custom"
            num="05"
            mt
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <ServiceCard
            sImage="/images/tailwind-css.png"
            cText="Website"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rerum aliquid! Eius illo laudantium earum quae tempora autem cupiditate quaerat quo nam iste, neque harum aperiam facere similique provident voluptas."
            nText="Tailwind"
            num="06"
          />
        </div>
      </div>
      <div className="text-center mt-10 pb-12">
        <Link href={`https://www.fiverr.com/sajal_talukder`}>
          <a target="_blank">
            <button className="btn px-12 font-bold  py-3 rounded-full text-white bg-teal-700">
              View All
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Services;
