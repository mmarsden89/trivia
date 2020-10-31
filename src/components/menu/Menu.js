import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="upgrade-container">
        <h2>Upgrades</h2>
        <div>Easy Questions</div>
        <div>Medium Questions</div>
        <div>Hard Questions</div>
      </div>
      <div className="project-container">
        <h2>Project Details</h2>
        <div>Repository</div>
        <div>Developer Portfolio</div>
      </div>
    </div>
  );
};

export default Menu;
