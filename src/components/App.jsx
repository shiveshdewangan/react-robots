import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "../robots";
import SearchBox from "./SearchBox";

class App extends Component {
  state = {
    robots: [],
    searchfield: ""
  };

  componentDidMount() {
    this.setState({
      robots
    });
  }

  onSearchChange = event => {
    this.setState({
      searchfield: event.target.value.trim()
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.includes(this.state.searchfield.toLowerCase())
    );

    return (
      <React.Fragment>
        <h1 className="tc">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </React.Fragment>
    );
  }
}

export default App;
