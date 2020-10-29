import React, { useState, useEffect } from "react";
import "./PlayArea.scss";
import questions from "../../questions.json";

import Card from "./card/Card.js";

const PlayArea = () => {
  // const [questions, setQuestions] = useState([]);
  const [randomized, setRandomized] = useState([]);
  // const [flip, setFlip] = useState(false);

  const runRandomizer = () => {
    const random = questions.sort(() => Math.random() - 0.5);
    setRandomized(random);
  };

  useEffect(() => {
    runRandomizer();
  });

  const randomHtml = randomized.map((qst, index, arr) => (
    <Card
      qst={qst.question}
      key={index}
      idx={index}
      cor={qst.correct}
      inc={qst.incorrect}
    />
  ));
  return <div className="play-area-container">{randomized && randomHtml}</div>;
};

export default PlayArea;
