import React, { Component } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="tc">
      {robots.map((robot, i) => (
        <Card
          key={robot.i}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
