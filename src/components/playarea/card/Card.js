import React, { useState } from "react";
import "./Card.scss";

const Card = (props) => {
  const [checkedOption, setCheckedOption] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleClick = (event) => {
    console.log(event.target.value);
    setCheckedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    props.handleScore();
  };

  return (
    <div
      className={props.idx === 0 ? "card-container first" : "card-container"}
      idx={props.idx}
      style={{ display: submit ? "none" : "block" }}
    >
      <div className="question">{props.qst}</div>
      <div className="answers">
        <form>
          {props.rdm.map((answer) => (
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
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Card;
