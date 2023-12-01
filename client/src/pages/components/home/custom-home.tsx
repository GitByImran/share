import React from "react";
import Banner from "./custom-home-contents/banner";
import WhyToUs from "./custom-home-contents/why";
import About from "./custom-home-contents/about";
import Subscribe from "./custom-home-contents/subscribe";
import { ModeToggle } from "@/pages/shared-components/theme-toggler";

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
