import React, { useState } from "react";
import "./Cookie.scss";

const Cookie = () => {
  const [cookie, setCookie] = useState(false);
  return (
    <div className="cookie-container">
      I use a cookie to save your total score progress. Nothing else!
      <div className="button">Agree</div>
    </div>
  );
};

export default Cookie;
