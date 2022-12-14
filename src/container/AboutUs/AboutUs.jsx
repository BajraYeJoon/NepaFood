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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          delectus vero saepe ducimus sunt doloribus.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          delectus vero saepe ducimus sunt doloribus.
        </p>
        <button type="button" className="custom__button">
          Dive Deep
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
