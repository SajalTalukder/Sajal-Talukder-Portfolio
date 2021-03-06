import React from "react";
import Heading from "../UI/Heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ReviewBox from "../UI/ReviewBox";
import { useSelector } from "react-redux";

const Review = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const bg = isDark ? "bg-black" : "bg-white";
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className={`${bg} pt-12 pb-12`} id="review">
      <Heading ft="Client" st="Review" />
      <div className="mt-8 md:mt-16 w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
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
          <ReviewBox
            imgSrc="/images/user-1.jpg"
            reviwText="Very Experienced Person Expert in Next and React Js Good Communication and give me the Best services "
            name="Jonas"
            company="XYZ Company"
          />
          <ReviewBox
            imgSrc="/images/user-3.jpg"
            reviwText="Very Experienced Person Expert in Next and React Js Good Communication and give me the Best services "
            name="Eren"
            company="XYZ Company"
          />
          <ReviewBox
            imgSrc="/images/user-2.jpg"
            reviwText="Very Experienced Person Expert in Next and React Js Good Communication and give me the Best services "
            name="Makisa"
            company="XYZ Company"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
