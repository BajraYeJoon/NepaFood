import React from "react";

import "./Laurels.css";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__achieve_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__achieve_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  // MAIN CONTAINER
  <div className="app__bg app__wrapper section__padding" id="awards">
    {/* INFO CONTAINER */}
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Achivement</h1>

      {/* AWARD CONTAINER */}

      <div className="app__achieve_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    {/* IMAGE CONTAINER */}
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="award" style={{ scale: "1.1" }} />
    </div>
  </div>
);

export default Laurels;
