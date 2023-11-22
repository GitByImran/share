import React from "react";
import Banner from "./contents/banner";
import WhyToUs from "./contents/why";
import About from "./contents/about";
import Subscribe from "./contents/subscribe";

const CustomHomePage: React.FC = () => {
  return (
    <div className="custom-width px-5">
      <Banner />
      <WhyToUs />
      <About />
      <Subscribe />
    </div>
  );
};

export default CustomHomePage;
