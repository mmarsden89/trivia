import React, { useState, useEffect } from "react";
import "./PlayArea.scss";
import questions from "../../questions.json";

import Card from "./card/Card.js";

const PlayArea = () => {
  const [cardQuestion, setCardQuestion] = useState({});
  const [allQuestions, setAllQuestions] = useState(questions);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const sortAnswers = async (question) => {
    return [...question.incorrect, question.correct].sort(
      () => Math.random() - 0.5
    );
  };

  const getQuestion = async () => {
    await allQuestions.sort(() => Math.random() - 0.5);
    const answersSort = await sortAnswers(allQuestions[0]);
    setAnswers(answersSort);
    setCardQuestion(allQuestions[0]);
    allQuestions.shift();
  };

  const handleScore = () => {
    let newScore = score + 1;
    setScore(newScore);
  };

  const flipGame = () => {
    setGameOver(!gameOver);
  };

  const handleSubmit = (answer) => {
    if (answer === cardQuestion.correct) {
      handleScore();
    }
    if (count === 10) {
      flipGame();
    } else if (count < 10) {
      getQuestion();
      setCount(count + 1);
    }
  };

  useEffect(() => {
    getQuestion();
  }, [gameOver]);

  const cardHtml = (
    <Card
      qst={cardQuestion && cardQuestion.question}
      cor={cardQuestion && cardQuestion.correct}
      inc={cardQuestion && cardQuestion.incorrect}
      answers={answers}
      handleScore={handleScore}
      handleSubmit={handleSubmit}
    />
  );

  const gameOverHtml = (
    <div className="game-over">Game over! You scored {score} points!</div>
  );

  const questionNumberHtml = (
    <div className="button question-number">Question #{count}</div>
  );

  return (
    <div className="play-area-container">
      <div className="stat-container">
        {count < 10 && questionNumberHtml}
        <div className="button score">{score} / 10</div>
      </div>
      {cardQuestion && count < 10 && !gameOver && cardHtml}
      {count === 10 && gameOverHtml}
    </div>
  );
};

export default PlayArea;
