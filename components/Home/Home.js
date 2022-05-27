import React from "react";
import TopUp from "../UI/TopUp";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Price from "./Price";
import Review from "./Review";
import Services from "./Services";

const Home = () => {
  return (
    <div className="overflow-x-hidden" id="home">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Price />
      <Review />
      <Blog />
      <Contact />
      <Footer />
      <TopUp />
    </div>
  );
};

export default Home;
