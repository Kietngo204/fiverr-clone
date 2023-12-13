import React from "react";
import SearchTitle from "./SearchTitle";
import InfoHero from "./InfoHero";

export interface BackgroundItemProps {
  hero: any;
}

const BackgroundItem: React.FC<BackgroundItemProps> = ({ hero }) => {
  const divStyle = {
    backgroundColor: `${hero.backgroundSecond}`,
  };
  return (
    <div
      className="relative hidden h-[760px] w-full lg:inline-block"
      style={divStyle}
    >
      <SearchTitle />
      <div className="absolute left-0 top-0 z-10 h-full w-full ">
        <img
          src={`${hero.background}`}
          alt="background"
          className=" mx-auto h-full object-cover object-top"
        />
      </div>
      <InfoHero hero={hero} />
    </div>
  );
};

export default BackgroundItem;
