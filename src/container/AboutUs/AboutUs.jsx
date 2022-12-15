import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  // Main container for about section
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* Overlay background  */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g" />
    </div>

    {/* CONTENT CONTAINER */}
    <div className="app__aboutus-content flex__center">
      {/* LEFT ABOUT CONTAINER */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          We are the home to the traditional Nepali cuisines. We provide the
          taste of what native loves and immerse you in the cultural aspect of
          the food
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      {/* MIDDLE IMG */}
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="knife" />
      </div>

      {/* RIGHT CONTENT CONTAINER */}
      <div className="app__aboutus-content_mission">
        <h1 className="headtext__cormorant">Our Mission</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Nepali cuisines are diverse and filled with fusions of spices and
          creativity. We ensure to provide you the experience that you have not
          find elsewhere.
        </p>
        <button type="button" className="custom__button">
          Book The Table
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
