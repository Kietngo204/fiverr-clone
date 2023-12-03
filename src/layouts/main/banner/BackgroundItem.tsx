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
      className="w-full h-[760px] relative hidden lg:inline-block"
      style={divStyle}
    >
      <SearchTitle />
      <div className="absolute top-0 left-0 w-full h-full z-10 ">
        <img
          src={`${hero.background}`}
          alt="background"
          className=" object-top object-cover h-full mx-auto"
        />
      </div>
      <InfoHero hero={hero} />
    </div>
  );
};

export default BackgroundItem;
