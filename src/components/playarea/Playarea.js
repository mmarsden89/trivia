import React, { useState, useEffect } from "react";
import "./PlayArea.scss";
import scoreRange from "../../scoreRange.json";

import Card from "./Card/Card.js";

const PlayArea = (props) => {
  const [cardQuestion, setCardQuestion] = useState({});
  const [allQuestions, setAllQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [fireworks, setFireworks] = useState(false);
  const [playing, setPlaying] = useState(false);

  const sortAnswers = (question) => {
    return [...question.incorrect, question.correct].sort(
      () => Math.random() - 0.5
    );
  };

  const sortQuestions = () => {
    allQuestions.sort(() => Math.random() - 0.5);
  };

  const getQuestion = () => {
    sortQuestions();
    const answersSort = sortAnswers(allQuestions[0]);
    setAnswers(answersSort);
    setCardQuestion(allQuestions[0]);
    allQuestions.shift();
    setFireworks(false);
  };

  const handleFireworks = () => {
    setFireworks(true);
  };

  const flipGame = () => {
    setGameOver(!gameOver);
  };

  const newGame = () => {
    const newQuestions = props.questions.slice();
    setAllQuestions(newQuestions);
    props.setScore(0);
    setCount(1);
    getQuestion();
    flipGame();
  };

  const handleSubmit = (answer) => {
    if (count === 10) {
      setCount(count + 1);
      flipGame();
    } else if (count < 10) {
      getQuestion();
      setCount(count + 1);
    }
  };

  const startPlay = () => {
    newGame();
    setGameOver(false);
    setPlaying(true);
  };

  useEffect(() => {
    setAllQuestions(props.questions.slice());
    if (playing) getQuestion();
    if (props.newGame) {
      setPlaying(false);
      newGame();
    }
    // eslint-disable-next-line
  }, [gameOver, props.questions, playing]);

  const cardHtml = (
    <Card
      qst={cardQuestion.question}
      cor={cardQuestion.correct}
      inc={cardQuestion.incorrect}
      answers={answers}
      handleScore={props.handleScore}
      handleSubmit={handleSubmit}
      handleFireworks={handleFireworks}
    />
  );

  const gameOverHtml = (
    <div className="game-over">
      <div className="game-over-text">
        Game over! You scored {props.score} points!
      </div>
      <div className="game-over-message">{scoreRange[props.score]}</div>
      <div className="button new-game" onClick={newGame}>
        new game?
      </div>
    </div>
  );

  const questionNumberHtml = (
    <div className="button question-number">Question #{count}</div>
  );

  const fireWorkHtml = (
    <div className="fireworks">
      <div className="before"></div>
      <div className="after"></div>
    </div>
  );

  const scoreHtml = (
    <div className="button score">
      {fireworks && fireWorkHtml}
      {props.score} / 10
    </div>
  );

  const currentLevelHTML = (
    <div className="button level">{cardQuestion.level || "default"}</div>
  );

  return (
    <div className="play-area-container">
      <div className="stat-container">
        {count < 11 && playing && questionNumberHtml}
        {!playing && (
          <button onClick={startPlay} className="button start-play">
            play?
          </button>
        )}
        {count < 11 && playing && currentLevelHTML}
        {count < 11 && playing && scoreHtml}
      </div>
      {cardQuestion && count < 11 && !gameOver && playing && cardHtml}
      {count > 10 && gameOverHtml}
    </div>
  );
};

export default PlayArea;
