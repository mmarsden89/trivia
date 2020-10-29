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

  const handleClick = (event) => {
    console.log(event.target);
  };

  return (
    <div className="play-area-container">
      {randomized &&
        randomized.map((qst, idx) => (
          <Card onClick={handleClick} qst={qst} key={idx} />
        ))}
    </div>
  );
};

export default PlayArea;
