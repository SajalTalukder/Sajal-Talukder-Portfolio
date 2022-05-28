import React, { useEffect, useState } from "react";
import Home from "../components/Layout/Home";
import Loader from "../components/UI/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="font-lato">{loading ? <Loader /> : <Home />}</div>
    </>
  );
};

export default HomePage;
