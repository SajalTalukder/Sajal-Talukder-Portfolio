import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projects from "../../data/data";
import Image from "next/image";

import Link from "next/link";
import Heading from "../UI/Heading";
const Portfolio = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="mt-10" id="portfolio">
      <Heading ft="MY" st=" Portfolio" />
      <div className="mb-16">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
        >
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="relative hover:scale-110 transform transition-all duration-300 shadow-gray-600 space-x-6 ml-5 mr-5"
              >
                <Link href={project.live}>
                  <a target="_blank">
                    <Image
                      src={project.heroImage}
                      objectFit="contain"
                      alt={project.name}
                      width={800}
                      height={800}
                      className="cursor-pointer transform transition duration-400"
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
