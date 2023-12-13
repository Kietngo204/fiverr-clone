import React from "react";

const ServicesItem = (service: any) => {
  const { tenLoaiCongViec, bg } = service.service;

  const divStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <div
      className={`mx-auto  h-[345px] w-[94%] rounded bg-cover bg-center p-4 text-2xl font-bold text-white`}
      style={divStyle}
    >
      {tenLoaiCongViec}
    </div>
  );
};

export default ServicesItem;
