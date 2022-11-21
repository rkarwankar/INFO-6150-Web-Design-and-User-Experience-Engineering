import React from "react";
import "./index.scss";

const Card = ({ text }) => {
  return (
    <div>
      <div className="cardContainer">
        <div className="innerCard"></div>
        <p className="textCard">{text}</p>
      </div>
    </div>
  );
};

export default Card;
