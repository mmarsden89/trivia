import "./App.scss";
import "./media-queries.scss";
import React, { useState, useEffect } from "react";
import { Footer, Header, Menu, PlayArea } from "./Components/index.js";
import questions from "./questions.json";
import questionseasy from "./questionseasy.json";
import questionsmedium from "./questionsmedium.json";
import questionshard from "./questionshard.json";
import consoleLogger from "./helpers/consolelogger";

function App() {
  const trividuh = JSON.parse(localStorage.getItem("trividuh"));

  const [menu, setMenu] = useState("");
  const [score, setScore] = useState(0);
  const [cookie, setCookie] = useState(false);
  const [questionSet, setQuestionSet] = useState(questions);
  const [newGame, setNewGame] = useState(false);
  const [consoled, setConsoled] = useState(false);
  const [updated, setUpdated] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleCookie = () => {
    setCookie(true);

    const data = JSON.stringify({
      points: 10,
      easy: false,
      medium: false,
      hard: false,
    });
    localStorage.setItem("trividuh", data);

    setUpdated(true);
  };

  const handleCookieInfo = (type) => {
    let { points, easy, medium, hard } = trividuh;
    if (type === "score") {
      setScore(score + 1);
      points++;
    } else if (points >= 10) {
      if (type === "easy" && !easy) {
        easy = true;
        points = points - 10;
      } else if (type === "medium" && !medium && points >= 30) {
        medium = true;
        points = points - 30;
      } else if (type === "hard" && !hard && points >= 40) {
        hard = true;
        points = points - 40;
      }
    }
    let updatedData = JSON.stringify({
      points: points,
      easy: easy,
      medium: medium,
      hard: hard,
    });

    localStorage.setItem("trividuh", updatedData);
    setUpdated(true);
  };

  const handleScore = () => {
    handleCookieInfo("score");
    setScore(score + 1);
    setUpdated(true);
  };

  const handlePurchase = (event) => {
    const type = event.currentTarget.id;
    if (localStorage.getItem(type)) {
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
    if (trividuh) {
      setCookie(true);
    } else {
      handleCookie();
    }
    consoleLogger(setConsoled, consoled);
    setNewGame(false);
    setUpdated(false);
    // eslint-disable-next-line
  }, [cookie, questionSet, trividuh, updated]);

  return (
    <div className="App">
      {cookie && (
        <>
          <header className="App-header">
            <Header toggleMenu={toggleMenu} />
          </header>
          <div className="body-container">
            {
              <Menu
                handlePurchase={handlePurchase}
                menu={menu}
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
