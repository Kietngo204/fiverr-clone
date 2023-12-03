import React from "react";

const Trusted = () => {
  return (
    <div className="w-full bg-[#f5f5f5] mb-[24px] mt-[-6px] lg:mb-[96px]">
      <div className="flex justify-center items-center h-[76px] w-full max-w-[328px] sm:max-w-[450px] lg:max-w-[850px] xl:max-w-[1400px] mx-auto">
        <p className="text-[#b5b6ba] pr-[20px] font-semibold hidden lg:block">
          Trusted by:{" "}
        </p>
        <ul className="flex justify-center items-center ">
          <li className="pl-4 lg:pl-10 xl:pl-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.d8d5bc3.png"
              alt="meta"
              className="lg:w-[85px] lg:h-[60px]"
            />
          </li>
          <li className="pl-4 lg:pl-10 xl:pl-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google2x.0053d08.png"
              alt="google"
              className="lg:w-[74px] lg:h-[60px]"
            />
          </li>
          <li className="pl-4 lg:pl-10 xl:pl-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix2x.9022712.png"
              alt="meta"
              className="lg:w-[71px] lg:h-[60px]"
            />
          </li>
          <li className="pl-4 lg:pl-10 xl:pl-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg2x.6665fbe.png"
              alt="P&G"
              className="lg:w-[47px] lg:h-[60px]"
            />
          </li>
          <li className="pl-4 lg:pl-10 xl:pl-[60px] hidden sm:block">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal2x.bd199ac.png"
              alt="paypal"
              className="lg:w-[84px] lg:h-[60px]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Trusted;
