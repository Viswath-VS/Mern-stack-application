import React, { useState } from "react";
import "./app.scss";
import cardItems from "../store/columns";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Cards from "../components/card/card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Home from "../pages/home/home";
import HomeUpdate from "../pages/home/homeUpdate";
import View from "../pages/view/view";
import ViewUpdate from "../pages/view/viewUpdate";

const App = () => {
  const [cardsList, setCardsList] = useState(cardItems);

  const handleDragEnd = (res) => {
    if (!res.destination) return;
    const newItems = Array.from(cardsList);
    const [reorderedItem] = newItems.splice(res.source.index, 1);
    newItems.splice(res.destination.index, 0, reorderedItem);
    setCardsList(newItems);
  };

  return (
    <div className="app-wrapper">
      <div className="nav-wrapper">
        <Navbar title="Quikie Apps" />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cardsList">
          {(provided) => (
            <div
              className="card-wrapper"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cardsList.map(({ logo, symbol, price }, index) => {
                return (
                  <Cards
                    logo={logo}
                    symbol={symbol}
                    price={price}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="table-wrapper">
        <Switch>
          <Route exact path="/view">
            <View />
          </Route>
          <Route exact path="/viewUpdate">
            <ViewUpdate />
          </Route>
          <Route exact path="/homeUpdate">
            <HomeUpdate />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
