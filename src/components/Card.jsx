import React, { Component } from "react";

const Card = ({ id, name, email }) => {
  return (
    <React.Fragment>
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 block">
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
