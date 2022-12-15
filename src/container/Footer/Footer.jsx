import React from "react";

import "./Footer.css";
import { images } from "../../constants";

import { Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => (
  // main container
  <div className="app__footer app__bg section__padding">
    {/* secondary container */}
    <Newsletter />

    {/* Sub footer container */}

    <div className="app__footer-links">
      {/* Contact */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Bhaktapur Durbar, 44800 , Nepal</p>
        <p className="p__opensans">+977-9860756619</p>
        <p className="p__opensans">+977-9803920174</p>
      </div>

      {/* lOGO */}
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="logo" />
        <p className="p__opensans">
          Fine Dining | Cultural Experience | Great View.
        </p>
        <img
          src={images.spoon}
          alt=""
          className="spoon__img "
          style={{ marginTop: "1rem" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      {/* Timing */}

      <div className="app__footer-links_timing">
        <h1 className="app__footer-headtext"> Working Hours</h1>
        <p className="p__opensans">Mon - Fri</p>
        <p className="p__opensans">10.00am - 2.00pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 NepaFood. Bajraya</p>
    </div>
  </div>
);

export default Footer;
