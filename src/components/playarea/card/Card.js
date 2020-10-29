import React from "react";
import "./Card.scss";

const Card = (props) => {
  console.log(props);
  const handleClick = (event) => {
    console.log(event.target);
  };

  return (
    <div
      className={props.idx === 0 ? "card-container first" : "card-container"}
      onClick={handleClick}
      idx={props.idx}
    >
      <div className="question">{props.qst}</div>
      <div className="answers">
        {props.rdm.map((answer) => (
          <div>{answer}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;
