import "./App.scss";
import "./media-queries.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.js";
import PlayArea from "./components/playarea/PlayArea.js";
import Menu from "./components/menu/Menu.js";
import Footer from "./components/footer/Footer.js";
import Cookie from "./components/cookie/Cookie.js";
import questions from "./questions.json";
import questionseasy from "./questionseasy.json";
import questionsmedium from "./questionsmedium.json";
import questionshard from "./questionshard.json";

function App() {
  const [menu, setMenu] = useState("");
  const [cookie, setCookie] = useState(false);
  const [cookieNum, setCookieNum] = useState(0);
  const [score, setScore] = useState(0);
  const [questionSet, setQuestionSet] = useState(questions);
  const [newGame, setNewGame] = useState(false);
  const [consoled, setConsoled] = useState(false);

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
    let cookieJSON = JSON.parse(document.cookie);
    let cookieScore = parseFloat(cookieJSON.score);
    let easyScore = cookieJSON.easy === "true";
    let mediumScore = cookieJSON.medium === "true";
    let hardScore = cookieJSON.hard === "true";
    if (type === "score") {
      cookieScore = cookieScore + 1;
      setCookieNum(cookieScore);
    } else if (cookieScore >= 20) {
      if (type === "easy" && !easyScore) {
        easyScore = true;
        cookieScore = cookieScore - 20;
        setCookieNum(cookieScore);
      } else if (type === "medium" && !mediumScore && cookieScore >= 30) {
        mediumScore = true;
        cookieScore = cookieScore - 30;
        setCookieNum(cookieScore);
      } else if (type === "hard" && !hardScore && cookieScore >= 40) {
        hardScore = true;
        cookieScore = cookieScore - 40;
        setCookieNum(cookieScore);
      }
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
    const type = event.currentTarget.id;
    if (JSON.parse(document.cookie)[type] === "true" || type === "default") {
      handleQuestionSet(type);
    } else {
      handleCookieInfo(type);
    }
  };
  if (!consoled) {
    const imageStyle = [
      'background-image: url("https://thumbs.gfycat.com/ImmaculateImpassionedKitten-max-1mb.gif")',
      "background-size: cover",
      "padding: 150px 300px",
      "width: 100px;",
      "height: 50px;",
    ].join(";");
    console.log("%c ", imageStyle);

    console.log(
      "%cThis could be us squashing bugs together if you hire me! %c\nportfolio \nhttps://mmarsden89.github.io\ngithub \nhttps://github.com/mmarsden89 \nlinkedin \nhttps://www.linkedin.com/in/matthewjmarsden/",
      "color:white;font-size:12px;background-color:green",
      "color: blue; font-weight: 900"
    );
    setConsoled(true);
  }

  const handleQuestionSet = (type) => {
    if (type === "default") {
      setQuestionSet(questions);
    } else if (type === "easy") {
      setQuestionSet(questionseasy);
    } else if (type === "medium") {
      setQuestionSet(questionsmedium);
    } else {
      setQuestionSet(questionshard);
    }
    setNewGame(true);
  };

  useEffect(() => {
    setCookie(false);
    if (document.cookie.length > 0) {
      setCookie(true);
      setCookieNum(JSON.parse(document.cookie).score);
    }
    setNewGame(false);
  }, [cookie, cookieNum, questionSet]);

  return (
    <div className="App">
      {!cookie && <Cookie handleCookie={handleCookie} cookie={cookie} />}
      {cookie && (
        <>
          {" "}
          <header className="App-header">
            <Header toggleMenu={toggleMenu} cookieNum={cookieNum} />
          </header>
          <div className="body-container">
            {
              <Menu
                cookieNum={cookieNum}
                handlePurchase={handlePurchase}
                menuTog={menu}
              />
            }
            <PlayArea
              handleScore={handleScore}
              setScore={setScore}
              score={score}
              questions={questionSet}
              newGame={newGame}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
