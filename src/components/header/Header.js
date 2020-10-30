import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="button menu" onClick={props.toggleMenu}>
        menu
      </div>
      <h1>Trivia</h1>
    </div>
  );
};

export default Header;
