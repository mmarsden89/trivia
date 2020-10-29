import React from "react";
import "./Card.scss";

const Card = (props) => {
  console.log(props);
  const handleClick = (event) => {
    console.log(event.target);
  };

  return (
    <div className="card-container" onClick={handleClick} idx={props.idx}>
      <div className="question">{props.qst}</div>
    </div>
  );
};

export default Card;
