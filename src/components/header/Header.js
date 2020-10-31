import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="button menu" onClick={props.toggleMenu}>
        menu
      </div>
      <div className="header-right-container">
        <p className="cookie-num">{props.cookieNum || 0}</p>
        <h1>Trivia</h1>
      </div>
    </div>
  );
};

export default Header;
