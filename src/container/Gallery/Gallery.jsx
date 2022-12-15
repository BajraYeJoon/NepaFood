import React, { useRef } from "react";
import "./Gallery.css";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Gallery = () => {
  const photoRef = useRef(null);

  const scroll = (direction) => {
    const { current } = photoRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const slideImage = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  return (
    // Main container
    <div className="app__gallery flex__center">
      {/* Left Content Container */}
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#aaa", marginTop: "2rem", marginBottom: "1rem" }}
        >
          A photo gallery of Nepali cuisine that showcases the rich, diverse
          flavors and ingredients of this vibrant culinary tradition.
        </p>

        <button type="button" className="custom__button">
          Explore
        </button>
      </div>

      {/* Right Container */}

      <div className="app__gallery-images">
        {/* Right images Container */}
        <div className="app__gallery-images_container" ref={photoRef}>
          {slideImage.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={index}>
              <img src={image} alt="" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        {/* Arrows Container */}

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
