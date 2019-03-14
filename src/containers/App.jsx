import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Heading from "../components/Heading";
import Scroll from "../components/Scroll";
import axios from "axios";
import "../containers/App.css";
import "../containers/index.css";

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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchfield)
    );

    return (
      <React.Fragment>
        <Heading />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </React.Fragment>
    );
  }
}

export default App;
