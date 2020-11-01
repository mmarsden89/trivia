import "./App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.js";
import PlayArea from "./components/playarea/PlayArea.js";
import Menu from "./components/menu/Menu.js";
import Footer from "./components/footer/Footer.js";
import Cookie from "./components/cookie/Cookie.js";

function App() {
  const [menu, setMenu] = useState(false);
  const [cookie, setCookie] = useState(false);
  const [cookieNum, setCookieNum] = useState(0);
  const [score, setScore] = useState(0);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleCookie = () => {
    setCookie(true);
    document.cookie = JSON.stringify({
      score: "0",
      easy: "false",
      medium: "false",
      hard: "false",
    });
  };

  const handleCookieInfo = (type) => {
    console.log(document.cookie);
    let cookieJSON = JSON.parse(document.cookie);
    let cookieScore = parseFloat(cookieJSON.score);
    console.log(cookieScore);
    let easyScore = false;
    let mediumScore = false;
    let hardScore = false;
    if (type === "score") {
      cookieScore = cookieScore + 1;
      setCookieNum(cookieScore);
    } else if (type === "easy") {
      easyScore = true;
    } else if (type === "medium") {
      mediumScore = true;
    } else if (type === "hard") {
      hardScore = true;
    }
    document.cookie = JSON.stringify({
      score: `${cookieScore}`,
      easy: `${easyScore}`,
      medium: `${mediumScore}`,
      hard: `${hardScore}`,
    });
  };

  const handleScore = () => {
    handleCookieInfo("score");
    let newScore = score + 1;
    setScore(newScore);
  };

  const handlePurchase = (event) => {
    console.log(event.currentTarget.id);
  };

  useEffect(() => {
    console.log(document.cookie);
    setCookie(false);
    if (document.cookie.length > 0) {
      setCookie(true);
      setCookieNum(JSON.parse(document.cookie).score);
    }
  }, [cookie, cookieNum]);

  return (
    <div className="App">
      <header className="App-header">
        <Header toggleMenu={toggleMenu} cookieNum={cookieNum} />
      </header>
      <div className="body-container">
        {menu && <Menu cookieNum={cookieNum} handlePurchase={handlePurchase} />}
        <PlayArea handleScore={handleScore} setScore={setScore} score={score} />
      </div>
      <Footer />
      {!cookie && <Cookie handleCookie={handleCookie} cookie={cookie} />}
    </div>
  );
}

export default App;
