import React, { useEffect, useState } from "react";
import "./Menu.scss";
import coin from "../../coin.png";

const Menu = (props) => {
  const [cookieNum, setCookieNum] = useState(0);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);

  const cookies = JSON.parse(document.cookie);

  useEffect(() => {
    setCookieNum(props.cookieNum);
    setEasy(cookies.easy === "true");
    setMedium(cookies.medium === "true");
    setHard(cookies.hard === "true");
  }, [cookieNum]);

  return (
    <div className="menu-container">
      <div className="upgrade-container">
        <h2>Upgrades</h2>
        <div
          className="upgrade-coin-container button"
          style={{
            cursor: cookieNum >= 20 || easy ? "pointer" : "not-allowed",
          }}
          onClick={props.handlePurchase}
          id="easy"
        >
          <h4>Easy Questions</h4>
          {easy ? (
            <div id="easy-owned" onClick={props.handleQuestionSet}>
              owned
            </div>
          ) : (
            <div className="coin-cost-container">
              20
              <img src={coin} className="coin" />
            </div>
          )}
        </div>
        <div
          className="upgrade-coin-container button"
          style={{
            cursor: cookieNum >= 20 || medium ? "pointer" : "not-allowed",
          }}
          onClick={props.handlePurchase}
          id="medium"
        >
          <h4>Medium Questions</h4>
          {medium ? (
            <div id="medium-owned" onClick={props.handleQuestionSet}>
              owned{" "}
            </div>
          ) : (
            <div className="coin-cost-container">
              20
              <img src={coin} className="coin" />
            </div>
          )}
        </div>
        <div
          className="upgrade-coin-container button"
          style={{
            cursor: cookieNum >= 20 || hard ? "pointer" : "not-allowed",
          }}
          onClick={props.handlePurchase}
          id="hard"
        >
          <h4>Hard Questions</h4>
          {hard ? (
            <div id="hard-owned" onClick={props.handleQuestionSet}>
              owned
            </div>
          ) : (
            <div className="coin-cost-container">
              20
              <img src={coin} className="coin" />
            </div>
          )}
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
