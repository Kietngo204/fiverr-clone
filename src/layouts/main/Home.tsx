import React from "react";

import Banner from "./banner/Banner";
import Trusted from "./trusted/Trusted";
import Services from "./services/Services";
import Selling from "./selling/Selling";

const Home = () => {
  return (
    <div>
      <Banner />
      <Trusted />
      <Services />
      <Selling />
    </div>
  );
};

export default Home;
