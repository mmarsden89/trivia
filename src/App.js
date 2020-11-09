import "./App.scss";
import "./media-queries.scss";
import React, { useState, useEffect } from "react";
import { Footer, Cookie, Header, Menu, PlayArea } from "./components/index.js";
import questions from "./questions.json";
import questionseasy from "./questionseasy.json";
import questionsmedium from "./questionsmedium.json";
import questionshard from "./questionshard.json";
import consoleLogger from "./helpers/consolelogger";

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
    document.cookie = `cookie=${JSON.stringify({
      score: "0",
      easy: "false",
      medium: "false",
      hard: "false",
    })}`;
  };

  const handleCookieInfo = (type) => {
    let cookieJSON = JSON.parse(document.cookie.split("=")[1]);
    let cookieScore = parseFloat(cookieJSON.score);
    let easyScore = cookieJSON.easy === "true";
    let mediumScore = cookieJSON.medium === "true";
    let hardScore = cookieJSON.hard === "true";
    if (type === "score") {
      cookieScore = cookieScore + 1;
      setCookieNum(cookieScore);
    } else if (cookieScore >= 10) {
      if (type === "easy" && !easyScore) {
        easyScore = true;
        cookieScore = cookieScore - 10;
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
    let JSONdata = JSON.stringify({
      score: `${cookieScore}`,
      easy: `${easyScore}`,
      medium: `${mediumScore}`,
      hard: `${hardScore}`,
    });

    document.cookie = `cookie=${JSONdata}`;
  };

  const handleScore = () => {
    handleCookieInfo("score");
    let newScore = score + 1;
    setScore(newScore);
  };

  const handlePurchase = (event) => {
    const type = event.currentTarget.id;
    if (
      JSON.parse(document.cookie.split("=")[1])[type] === "true" ||
      type === "default"
    ) {
      handleQuestionSet(type);
    } else {
      handleCookieInfo(type);
    }
  };

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
    console.log(document.cookie);
    if (document.cookie.length > 0) {
      setCookie(true);
      setCookieNum(JSON.parse(document.cookie.split("=")[1]).score);
    }
    consoleLogger(setConsoled, consoled);
    setNewGame(false);
    // eslint-disable-next-line
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
                toggleMenu={toggleMenu}
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
