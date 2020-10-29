import React, { useState } from "react";
import "./Card.scss";

const Card = (props) => {
  const [checkedOption, setCheckedOption] = useState("");
  const handleClick = (event) => {
    console.log(event.target.value);
    setCheckedOption(event.target.value);
  };

  return (
    <div
      className={props.idx === 0 ? "card-container first" : "card-container"}
      idx={props.idx}
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
        </form>
      </div>
    </div>
  );
};

export default Card;
