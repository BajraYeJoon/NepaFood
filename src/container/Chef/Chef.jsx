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
      <SubHeading title="Chef's " />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Recusandae, optio animi magnam modi laborum laudantium ea deserunt
            quas molestias voluptatum.{" "}
          </p>
        </div>

        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          adipisci nulla harum molestiae eaque magnam enim non fuga architecto
          nobis.
        </p>
      </div>

      <div className="app__chef-sign">
        <p className="p__cormorant"> Example Name</p>
        <p className="p__opensans">Chef</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
