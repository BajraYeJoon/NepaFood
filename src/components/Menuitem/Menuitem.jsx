import React from "react";
import "./Menuitem.css";

const Menuitem = ({ title, price, tags }) => (
  // Main Menu Container
  <div className="app__menuitem">
    {/* Header */}
    <div className="app__menuitem-head">
      {/* Name container */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app__menuitem-dash" />

      {/* price container */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    {/* Second info container */}
    <div className="app__menuitem-info">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default Menuitem;
