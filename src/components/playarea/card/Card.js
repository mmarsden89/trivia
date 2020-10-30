import React, { useState, useEffect } from "react";
import "./Card.scss";

const Card = (props) => {
  const [checkedOption, setCheckedOption] = useState("");
  const [answered, setAnswered] = useState(false);

  const handleClick = (answer) => {
    setCheckedOption(answer);
  };

  const handleSubmit = (event) => {
    console.log("heres event-->", event.target);
    event.preventDefault();
    setAnswered(true);
    if (props.cor === checkedOption) props.handleFireworks(true);
  };

  const handleNextQuest = () => {
    props.handleSubmit(checkedOption);
    setCheckedOption("");
    setAnswered(false);
  };

  useEffect(() => {}, []);

  const questionHtml = (
    <div>
      <div className="question">{props.qst}</div>
      <div className="answers">
        <form className="form-container">
          {props.answers &&
            props.answers.map((answer) => (
              <div
                className="button radio"
                key={answer}
                onClick={() => handleClick(answer)}
                style={{
                  backgroundColor: answer === checkedOption ? "#e51670" : "",
                }}
              >
                <div value={answer} className="child-answer">
                  {answer}
                </div>
              </div>
            ))}
        </form>
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={!checkedOption}
          className="button submit"
          style={{
            backgroundColor: !checkedOption ? "#add3d9" : "#80d2de",
            cursor: !checkedOption ? "not-allowed" : "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );

  const guessedResponseHtml =
    props.cor === checkedOption
      ? "Correct! Nice work"
      : `Incorrect. The correct answer is ${props.cor}`;

  const answerCard = (
    <div className="answer-card">
      <div className="answer-response">{guessedResponseHtml}</div>
      <button
        type="submit"
        onClick={handleNextQuest}
        className="button next-question"
      >
        next question
      </button>
    </div>
  );

  return (
    <div className="card-container">
      {answered && answerCard}
      {questionHtml}
    </div>
  );
};

export default Card;
