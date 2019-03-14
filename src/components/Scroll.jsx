import React, { Component } from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid green",
        height: "800px",
        margin: "10px auto"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
