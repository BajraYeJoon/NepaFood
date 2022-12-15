import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";

import { SubHeading, Menuitem } from "../../components";

const SpecialMenu = () => (
  // MenuItem container
  <div className="app__specialMenu flex__center section__padding" id="menu">
    {/* title container */}
    <div className="app__specialMenu-title">
      <SubHeading title="Menu" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    {/* Menu Container */}
    <div className="app__specialMenu-menu">
      {/* LEFT CONTAINER */}
      <div className="app__specialMenu-menu_left flex__center">
        <p className="app__specialMenu_menu_heading">Dinner</p>

        <div className="app__specialMenu_menu-items">
          {data.dinners.map((dinner, index) => (
            <Menuitem
              key={dinner.title + index}
              title={dinner.title}
              tags={dinner.tags}
              price={dinner.price}
            />
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu image" />
      </div>

      {/* RO=IGHT CONTAINER */}
      <div className="app__specialMenu-menu_right flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>

        <div className="app__specialMenu_menu-items">
          {data.cocktails.map((cocktail, index) => (
            <Menuitem
              key={cocktail.title + index}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
