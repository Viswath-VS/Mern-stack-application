import React from "react";
import "./card.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Cards = ({ logo, symbol, price, index }) => {
  return (
    <Draggable key={symbol} draggableId={symbol} index={index}>
      {(provided) => (
        <div
          className="card-items"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>{symbol}</p>
          <img src={logo} alt="" />
          <h2>{price}</h2>
        </div>
      )}
    </Draggable>
  );
};

export default Cards;
