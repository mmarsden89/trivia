import React from "react";
import "./Menu.scss";
import coin from "../../coin.png";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="upgrade-container">
        <h2>Upgrades</h2>
        <div className="upgrade-coin-container">
          <h4>Easy Questions</h4>
          <div className="coin-cost-container">
            20
            <img src={coin} className="coin" />
          </div>
        </div>
        <div className="upgrade-coin-container">
          <h4>Medium Questions</h4>
          <div className="coin-cost-container">
            20
            <img src={coin} className="coin" />
          </div>
        </div>
        <div className="upgrade-coin-container">
          <h4>Hard Questions</h4>
          <div className="coin-cost-container">
            20
            <img src={coin} className="coin" />
          </div>
        </div>
      </div>
      <div className="project-container">
        <h2>Project Details</h2>
        <div>
          <h4>Repository</h4>
        </div>
        <div>
          <h4>Developer Portfolio</h4>
        </div>
      </div>
    </div>
  );
};

export default Menu;
