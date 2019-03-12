import React, { Component } from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="tc">
      <input
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
