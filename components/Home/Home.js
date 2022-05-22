import React from "react";
import About from "./About";
import Blog from "./Blog";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Price from "./Price";
import Review from "./Review";
import Services from "./Services";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Price />
      <Review />
      <Blog />
    </div>
  );
};

export default Home;
