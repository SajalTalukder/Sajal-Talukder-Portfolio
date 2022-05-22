import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  return (
    <div className="grid grid-cols-2 mt-16 md:grid-cols-3 gap-[4rem] lg:grid-cols-4 w-[95%] md:w-[90%] lg:w-[80%] mx-auto text-center">
      <div className="mx-auto">
        <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: `#F06529`,
            })}
            value={90}
            text="90%"
          />
          <p className="text-center font-bold text-lg text-gray-800 mt-3">
            HTML
          </p>
        </div>
      </div>

      <div className="mx-auto">
        <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: `#264de4`,
            })}
            value={86}
            text="86%"
          />
          <p className="text-center font-bold text-lg text-gray-800 mt-3">
            CSS
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: ` #F0DB4F`,
            })}
            value={75}
            text="75%"
          />
          <p className="text-center font-bold text-lg text-gray-800 mt-3">
            JAVASCRIPT
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: ` #61DBFB`,
            })}
            value={85}
            text="85%"
          />
          <p className="text-center font-bold text-lg text-gray-800 mt-3">
            REACT
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: `#5e7693`,
            })}
            value={80}
            text="80%"
          />
          <p className="text-center font-bold text-lg text-gray-800 mt-3">
            NEXT JS
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: `#fa74a0`,
            })}
            value={90}
            text="90%"
          />
          <p className="text-center font-bold text-lg text-gray-800 mt-3">
            SASS
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: `#0a4a46`,
            })}
            value={87}
            text="87%"
          />
          <p className="text-center font-bold text-lg text-gray-800 mt-3">
            TAILWIND CSS
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: `#FFCB2B`,
            })}
            value={60}
            text="60%"
          />
          <p className="text-center font-bold text-lg text-gray-800 mt-3">
            FIREBASE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
