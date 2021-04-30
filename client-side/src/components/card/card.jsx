import React from "react";
import "./card.scss";

const Cards = ({ logo, symbol, price }) => {
  return (
    <div className="card-items">
      <p>{symbol}</p>
      <img src={logo} alt="" />
      <h2>{price}</h2>
    </div>
  );
};

export default Cards;
