import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    {/* Left Container */}
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>

      {/* Info Container */}
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, labore.
        </p>

        <p
          className="p__cormorant"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Opening Time
        </p>

        <p className="p__opensans">Mon - Fri : 10.00am - 2.00pm</p>

        <p className="p__opensans">Sat - Sun : 12.00am - 2.00pm</p>
      </div>

      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    {/*  Right Container */}
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
