import React from "react";
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
    <div className="overflow-x-hidden">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Price />
      <Review />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
