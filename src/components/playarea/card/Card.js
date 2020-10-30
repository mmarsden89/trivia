import React, { useState, useEffect } from "react";
import "./Card.scss";

const Card = (props) => {
  const [checkedOption, setCheckedOption] = useState("");
  const [answered, setAnswered] = useState(false);

  const handleClick = (event) => {
    setCheckedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(event.target);
    event.preventDefault();
    setAnswered(true);
  };

  const handleNextQuest = () => {
    props.handleSubmit(checkedOption);
    setCheckedOption("");
    setAnswered(false);
  };

  useEffect(() => {}, []);

  const html = (
    <div>
      <div className="question">{props.qst}</div>
      <div className="answers">
        <form>
          {props.answers &&
            props.answers.map((answer) => (
              <div className="radio" key={answer}>
                <label>
                  <input
                    type="radio"
                    value={answer}
                    checked={checkedOption === answer}
                    onChange={handleClick}
                  />
                  {answer}
                </label>
              </div>
            ))}
          <div
            onClick={handleSubmit}
            type="submit"
            disabled={!checkedOption}
            className="button submit"
          >
            Submit
          </div>
        </form>
      </div>
    </div>
  );

  const guessedResponseHtml =
    props.cor === checkedOption
      ? "Correct! Nice work"
      : `Incorrect. The correct answer is ${props.cor}`;

  const answerCard = (
    <div className="answer-card">
      {guessedResponseHtml}
      <div onClick={handleNextQuest} className="button next-question">
        next question
      </div>
    </div>
  );

  return (
    <div className="card-container">
      {answered && answerCard}
      {html}
    </div>
  );
};

export default Card;
