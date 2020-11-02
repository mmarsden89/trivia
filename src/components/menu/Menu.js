import React, { useEffect, useState } from "react";
import "./Menu.scss";
import coin from "../../coin.png";

const Menu = (props) => {
  const [cookieNum, setCookieNum] = useState(0);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);

  const cookies = JSON.parse(document.cookie.split("=")[1]);

  const handleClick = (e) => {
    if (e.target.id) {
    } else {
      props.toggleMenu();
    }
  };

  useEffect(() => {
    setCookieNum(props.cookieNum);
    setEasy(cookies.easy === "true");
    setMedium(cookies.medium === "true");
    setHard(cookies.hard === "true");
    // eslint-disable-next-line
  }, [cookieNum, easy, medium, hard, props.cookieNum, props.menuTog]);

  return (
    <div
      className={props.menuTog ? "menu-container" : "menu-container-close"}
      style={{
        opacity: typeof props.menuTog === "string" ? "0" : "1",
      }}
      onClick={handleClick}
    >
      <div className="upgrade-container">
        <h2 style={{ overflowX: "hidden" }}>Upgrades</h2>
        <div
          className="upgrade-coin-container button"
          style={{ cursor: "pointer" }}
          onClick={props.handlePurchase}
          id="default"
        >
          Default Questions
        </div>
        <div
          className="upgrade-coin-container button"
          style={{
            cursor: cookieNum >= 10 || easy ? "pointer" : "not-allowed",
          }}
          onClick={props.handlePurchase}
          id="easy"
        >
          <h4 id="easy-h4">Easy Questions</h4>
          {easy ? (
            <div id="easy-owned">owned</div>
          ) : (
            <div className="coin-cost-container" id="coin-cost-easy">
              10
              <img src={coin} className="coin" alt="coin" />
            </div>
          )}
        </div>
        <div
          className="upgrade-coin-container button"
          style={{
            cursor: cookieNum >= 30 || medium ? "pointer" : "not-allowed",
          }}
          onClick={props.handlePurchase}
          id="medium"
        >
          <h4 id="medium-h4">Medium Questions</h4>
          {medium ? (
            <div id="medium-owned">owned </div>
          ) : (
            <div className="coin-cost-container" id="coin-cost-medium">
              30
              <img src={coin} className="coin" alt="coin" />
            </div>
          )}
        </div>
        <div
          className="upgrade-coin-container button"
          style={{
            cursor: cookieNum >= 40 || hard ? "pointer" : "not-allowed",
          }}
          onClick={props.handlePurchase}
          id="hard"
        >
          <h4 id="hard-h4">Hard Questions</h4>
          {hard ? (
            <div id="hard-owned">owned</div>
          ) : (
            <div className="coin-cost-container" id="coin-cost-hard">
              40
              <img src={coin} className="coin" alt="coin" />
            </div>
          )}
        </div>
      </div>
      <div className="project-container">
        <h2>Project Details</h2>
        <div>
          <a
            href="https://github.com/mmarsden89/trividuh"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h4 className="upgrade-coin-container button link">Repository</h4>
          </a>
        </div>
        <div>
          <a
            href="https://mmarsden89.github.io"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h4 className="upgrade-coin-container button link">
              Developer Portfolio
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
