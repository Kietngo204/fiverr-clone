import React from "react";
import { useDispatch } from "react-redux";
import { onOpenModalVideoSelling } from "redux/slices/modalSlice";

const SellingRight = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-1/2 h-full flex justify-end cursor-pointer"
      onClick={() => {
        dispatch(onOpenModalVideoSelling());
      }}
    >
      <div className="relative w-full h-full">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
          alt="video"
          className="w-full h-full "
        />

        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/desktop-play-button.bab1740.png"
          alt="play"
          className="w-[80px] h-[80px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    </div>
  );
};

export default SellingRight;
