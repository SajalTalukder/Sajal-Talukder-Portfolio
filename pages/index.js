import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Loader from "../components/UI/Loading";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return <div className="font-lato">{loading ? <Loader /> : <Home />}</div>;
};

export default HomePage;
