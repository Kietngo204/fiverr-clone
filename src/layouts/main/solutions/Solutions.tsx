import React from "react";
import SolutionLeft from "./solutionLeft/SolutionLeft";
import SolutionRight from "./solutionRight/SolutionRight";

const Solutions = () => {
  return (
    <div className="bg-[#0d084d] text-center lg:text-left">
      <div className="container mx-auto py-24">
        <div className="flex flex-col items-center lg:flex-row">
          <SolutionLeft />
          <SolutionRight />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
