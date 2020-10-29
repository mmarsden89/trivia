import React, { useState, useEffect } from "react";
import "./PlayArea.scss";
import questions from "../../questions.json";

import Card from "./card/Card.js";

const PlayArea = () => {
  // const [questions, setQuestions] = useState([]);
  const [randomized, setRandomized] = useState([]);
  // const [flip, setFlip] = useState(false);

  const runRandomizer = (arr) => {
    const random = arr.sort(() => Math.random() - 0.5);
    setRandomized(random);
  };

  const randomizeQuestions = (inc, cor) => {
    console.log("here-->", inc, cor);
    if (inc) {
      const arr = [...inc, cor];
      return arr.sort(() => Math.random() - 0.5);
    }
  };

  useEffect(() => {
    runRandomizer(questions);
  });

  const randomHtml = randomized.map((qst, index, arr) => (
    <Card
      qst={qst.question}
      key={index}
      idx={index}
      cor={qst.correct}
      inc={qst.incorrect}
      rdm={randomizeQuestions(qst.incorrect, qst.correct)}
    />
  ));
  return <div className="play-area-container">{randomized && randomHtml}</div>;
};

export default PlayArea;
