import React from "react";
import SellingLeft from "./SellingLeft";
import SellingRight from "./SellingRight";

const Selling = () => {
  return (
    <div className="bg-[#f1fdf7] py-24 mb-24">
      <div className="container mx-auto flex items-center justify-between">
        <SellingLeft />
        <SellingRight />
      </div>
    </div>
  );
};

export default Selling;
