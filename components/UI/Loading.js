import React from "react";
import ReactLoading from "react-loading";
const Loader = () => {
  return (
    <div className="flex flex-col bg-[#111317] h-[100vh] w-[100vw] items-center justify-center">
      <ReactLoading
        type={"bars"}
        color={"#CA9F27"}
        height={"10%"}
        width={"10%"}
      />
    </div>
  );
};

export default Loader;
