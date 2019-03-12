import React, { Component } from "react";

const Card = ({ name, email }) => {
  return (
    <React.Fragment>
      <h1>RoboFriends</h1>
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 block">
        <img src="https://robohash.org/test?200x200" alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
