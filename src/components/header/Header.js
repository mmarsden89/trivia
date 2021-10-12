import React, { useState, useEffect } from "react";
import "./Header.scss";
import coin from "../../coin.png";

const Header = (props) => {
  const { toggleMenu } = props;

  const [points, setPoints] = useState(0);

  const trividuh = JSON.parse(localStorage.getItem("trividuh"));

  useEffect(() => {
    if (trividuh) {
      setPoints(trividuh.points);
    }
  }, [points, trividuh]);

  return (
    <div className="header-container">
      <div className="button menu" onClick={toggleMenu}>
        menu
      </div>
      <div className="header-right-container">
        <div className="coin-header-container">
          <p className="cookie-num">{points || 0}</p>
          <img src={coin} className="coin" alt="coin" />
        </div>
        <h1>TriviDuh</h1>
      </div>
    </div>
  );
};

export default Header;
