import Typewriter from "typewriter-effect";

import React from "react";

const TypeWrite = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "React Developer",
          "Next Js Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWrite;
