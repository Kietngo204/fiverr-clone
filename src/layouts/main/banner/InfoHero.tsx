import React from "react";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { BackgroundItemProps } from "./BackgroundItem";

const InfoHero: React.FC<BackgroundItemProps> = ({ hero }) => {
  return (
    <div className="  text-white p-3 absolute -3 bottom-8 right-8 rounded-full z-20 border border-[hsla(0,0%,100%,.4)] bg-[hsla(0,0%,100%,.4)] backdrop-opacity-10">
      <div className="flex items-center justify-center gap-3">
        <Avatar src={hero.avatar} alt={hero.name} />
        <div className="flex flex-col pr-3">
          <div className="flex justify-between text-xs font-bold">
            <p>{hero.name}</p>
            <p className="flex items-center">
              {hero.rating} <StarIcon sx={{ fontSize: "12px" }} />
            </p>
          </div>
          <h5 className="font-bold">{hero.job}</h5>
        </div>
      </div>
    </div>
  );
};

export default InfoHero;
