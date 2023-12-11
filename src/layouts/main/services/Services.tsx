import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { RootState } from "redux/store";
import { typeJob } from "redux/thunks/jobThunk";
import ServicesItem from "./ServiceItem";
import data from "./ServicesData.json";
import { SampleNextArrow, SamplePrevArrow } from "components/slick/SlickArrow";

const Services = () => {
  const dispatch = useDispatch();

  //   React.useEffect(() => {
  //     dispatch(typeJob(null) as any);
  //   }, [dispatch]);

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-6 sm:mb-[80px] lg:mb-24">
      <h2 className="pb-6 text-[32px] font-bold text-[#404145]">
        Popular services
      </h2>
      <Slider {...settings}>
        {data?.map((item) => {
          console.log(item.bg);

          return (
            <div key={item.id}>
              <ServicesItem service={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Services;
