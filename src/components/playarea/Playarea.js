import React, { useState, useEffect } from "react";
import "./PlayArea.scss";
import questions from "../../questions.json";

import Card from "./card/Card.js";

const PlayArea = () => {
  const [cardQuestion, setCardQuestion] = useState({});
  const [allQuestions, setAllQuestions] = useState(questions);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const sortAnswers = async (question) => {
    return [...question.incorrect, question.correct].sort(
      () => Math.random() - 0.5
    );
  };

  const getQuestion = async () => {
    allQuestions.sort(() => Math.random() - 0.5);
    const answersSort = await sortAnswers(allQuestions[0]);
    setAnswers(answersSort);
    setCardQuestion(allQuestions[0]);
    allQuestions.shift();
  };

  const handleScore = () => {
    const newScore = score;
    setScore(newScore++);
  };

  const handleSubmit = (answer) => {
    console.log(answer);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const randomHtml = (
    <Card
      qst={cardQuestion && cardQuestion.question}
      cor={cardQuestion && cardQuestion.correct}
      inc={cardQuestion && cardQuestion.incorrect}
      answers={answers}
      handleScore={handleScore}
      handleSubmit={handleSubmit}
    />
  );
  return (
    <div className="play-area-container">{cardQuestion && randomHtml}</div>
  );
};

export default PlayArea;
