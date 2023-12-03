import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchTitle = () => {
  return (
    <div className="bg-[#0a4226] pt-20 relative lg:absolute lg:bg-transparent lg:z-20 lg:max-w-[650px] lg:left-40 lg:top-20">
      <div className="px-16 py-24">
        <h2 className=" text-[40px] leading-[48px] md:text-[48px] md:leading-[56px]  text-white font-bold pb-6">
          Find the right <i className="font-serif font-normal">freelance</i>{" "}
          services, right away
        </h2>
        <form className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          <input
            type="text"
            placeholder="Search for any services"
            className="rounded w-full py-[10px] px-[16px] outline-none lg:rounded-l-sm lg:rounded-none"
          />
          <button
            className="rounded bg-[#1dbf73] py-[10px] px-[16px] text-white text-start lg:rounded-r-sm lg:rounded-none"
            onClick={() => {}}
          >
            <SearchIcon />
          </button>
        </form>

        <div className="hidden pt-6 text-white text-[14px] leading-[27px] font-bold lg:flex lg:items-center">
          <p className="">Popular: </p>
          <ul className="flex items-center">
            <li className="rounded-full border border-white ml-1 px-3 cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
              Website Design
            </li>
            <li className="rounded-full border border-white ml-1 px-3 cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
              WordPress
            </li>
            <li className="rounded-full border border-white ml-1 px-3 cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
              Logo Design
            </li>
            <li className="rounded-full border border-white ml-1 px-3 cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
              AI Services
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchTitle;
