import React from "react";
import SolutionLogo from "./SolutionLogo";
import SolutionList from "./SolutionList";

const SolutionLeft = () => {
  return (
    <div className="mb-0 w-full px-6 sm:mb-16 sm:px-0 lg:mb-0 lg:w-1/2">
      <SolutionLogo />
      <h2 className="w-full pb-6 text-[32px] font-bold text-white lg:max-w-[450px]">
        Advanced solutions and professional talent for businesses
      </h2>
      <SolutionList />
      <div className="inline-block cursor-pointer rounded bg-white px-6 py-3 font-semibold leading-[100%] text-[#62646a]">
        Lear more
      </div>
    </div>
  );
};

export default SolutionLeft;
