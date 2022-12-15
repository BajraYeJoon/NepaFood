import React from "react";

import "./Header.css";
import { images } from "../../constants";

import SubHeading from "../../components/SubHeading/SubHeading";
const Header = () => (
  // Main Container for Heading
  <div className="app__header app__wrapper section__padding" id="home">
    {/* Header Information */}
    <div className="app__wrapper_info">
      <SubHeading title="Experience the culture of cuisine" />
      <h1 className="app__header-h1">A Place for Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        The home of the traditional cuisine providing years of exquisite service
        by renowned local chef's
      </p>
      <button type="button" className="custom__button">
        Explore More
      </button>
    </div>
    {/* Header Image */}
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
