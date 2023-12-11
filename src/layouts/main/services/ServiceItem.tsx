import React from "react";

const ServicesItem = (service: any) => {
  const { tenLoaiCongViec, bg } = service.service;

  const divStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <div
      className={`h-[345px] mx-2 rounded p-4 text-white text-2xl font-bold bg-cover bg-center `}
      style={divStyle}
    >
      {tenLoaiCongViec}
    </div>
  );
};

export default ServicesItem;
