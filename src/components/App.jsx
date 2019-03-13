import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "../robots";
import SearchBox from "./SearchBox";
import axios from "axios";
import "../../src/App.css";
import "../../src/index.css";

class App extends Component {
  state = {
    API_URL: "http://jsonplaceholder.typicode.com/users/",
    robots: [],
    searchfield: ""
  };

  async componentDidMount() {
    await axios
      .get(this.state.API_URL)
      .then(({ data: users }) =>
        this.setState({
          robots: users
        })
      )
      .catch(err => console.log(err));
  }

  onSearchChange = event => {
    this.setState({
      searchfield: event.target.value.toLowerCase().trim()
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchfield)
    );

    return (
      <React.Fragment>
        <h1 className="tc f2">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </React.Fragment>
    );
  }
}

export default App;
