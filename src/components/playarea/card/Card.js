import React, { useState, useEffect } from "react";
import "./Card.scss";

const Card = (props) => {
  const [checkedOption, setCheckedOption] = useState("");
  const [rdm, setRdm] = useState([]);

  const handleClick = (event) => {
    console.log(event.target.value);
    setCheckedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(checkedOption);
  };

  useEffect(() => {
    const whatever = props.inc ? props.inc.push(props.cor) : null;
    setRdm(whatever);
  }, []);

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

  return <div className="card-container">{html}</div>;
};

export default Card;
