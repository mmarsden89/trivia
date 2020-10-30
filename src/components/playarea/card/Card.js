import React, { useState, useEffect } from "react";
import "./Card.scss";

const Card = (props) => {
  console.log(props);
  const [checkedOption, setCheckedOption] = useState("");
  const [answered, setAnswered] = useState(false);

  const handleClick = (event) => {
    console.log(event.target.value);
    setCheckedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    setAnswered(true);
    event.preventDefault();
    props.handleSubmit(checkedOption);
  };

  const handleNextQuest = () => {
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
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  const answerCard = (
    <div className="answer-card">
      {props.cor}
      <button onClick={handleNextQuest}>next question</button>
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
