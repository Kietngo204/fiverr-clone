import React from "react";
import SellingLeft from "./SellingLeft";
import SellingRight from "./SellingRight";

const Selling = () => {
  return (
    <div className="mb-6 bg-[#f1fdf7] py-24 sm:mb-20 lg:mb-24">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row ">
        <SellingLeft />
        <SellingRight />
      </div>
    </div>
  );
};

export default Selling;
