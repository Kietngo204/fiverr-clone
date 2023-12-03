import React from "react";
import Slider from "react-slick";

import containerBG from "./containerBG.json";
import BackgroundItem from "./BackgroundItem";
import MediaQueries from "components/mediaQueries/MediaQueries";
import SearchTitle from "./SearchTitle";
const Banner = () => {
  const { isMobile, isTablet, isDesktop } = MediaQueries();

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
  };
  return (
    <div>
      {isDesktop && (
        <Slider {...settings} className="overflow-hidden">
          {containerBG.map((item, index) => {
            return <div key={index}>{<BackgroundItem hero={item} />}</div>;
          })}
        </Slider>
      )}
      {isMobile || isTablet ? <SearchTitle /> : <></>}
    </div>
  );
};

export default Banner;
