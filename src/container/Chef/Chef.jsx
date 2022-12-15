import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  //main container
  <div className="app__bg app__wrapper section__padding">
    {/* Image wrapper */}
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    {/* content */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            As chefs dedicated to Nepali cuisine, we believe in using fresh,
            high-quality ingredients to create dishes that showcase the rich,
            diverse flavors of our culture.
          </p>
        </div>

        <p className="p__opensans">
          We strive to create a unique dining experience for our customers, one
          that celebrates the beauty and complexity of Nepali food. Above all,
          we believe in the importance of bringing people together through the
          shared enjoyment of delicious, carefully prepared meals.
        </p>
      </div>

      <div className="app__chef-sign">
        <p className="p__cormorant"> Isha Bajracharya </p>
        <p className="p__opensans">Chef</p>
        <img
          src={images.sign}
          alt="sign"
          style={{ width: "40%", height: "60%" }}
        />
      </div>
    </div>
  </div>
);

export default Chef;
