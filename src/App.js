import React, { Component } from "react";

import axios from "axios";

import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Main from "./components/Main";

class App extends Component {
  state = {
    data: [],
    searchQuery: "",
    isGenerated: false
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://pomber.github.io/covid19/timeseries.json"
      );
      this.setState({ data, isGenerated: true });
    } catch (ex) {
      alert("Something went wrong! Please reload.");
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const searchQuery = input.value;
    this.setState({ searchQuery });
  };

  render() {
    const { data, searchQuery } = this.state;

    return (
      <div className="bg-secondary">
        <Jumbotron />
        <Search
          data={data}
          searchQuery={searchQuery}
          onChange={this.handleChange}
        />
        <Main state={this.state} />
      </div>
    );
  }
}

export default App;
