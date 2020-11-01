import React from "react";
import "./Cookie.scss";

const Cookie = (props) => {
  return (
    <div
      className="cookie-container"
      style={{ display: props.cookie ? "none" : "block" }}
    >
      This app uses cookies. The use of this cookie is just to save your total
      score. No identifying or any other information is saved nor stored
      anywhere else.
      <div className="button cookie-button" onClick={props.handleCookie}>
        Agree
      </div>
    </div>
  );
};

export default Cookie;
