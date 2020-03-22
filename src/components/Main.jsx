import React, { Component } from "react";

class Main extends Component {
  renderTable(countryNames) {
    const { state } = this.props;
    if (!state.isGenerated)
      return (
        <tr>
          <th></th>
          <td></td>
          <td className="text-primary">Loading...</td>
          <td></td>
          <td></td>
        </tr>
      );
    else {
      if (!countryNames.length)
        return (
          <tr className="text-light">
            <th></th>
            <td></td>
            <td>No match found!</td>
            <td></td>
            <td></td>
          </tr>
        );
      return countryNames.map((name, index) => (
        <tr key={index}>
          <th scope="row">{name}</th>
          <td>{state.data[name][state.data[name].length - 1].date}</td>
          <td>{state.data[name][state.data[name].length - 1].confirmed}</td>
          <td>{state.data[name][state.data[name].length - 1].deaths}</td>
          <td>{state.data[name][state.data[name].length - 1].recovered}</td>
        </tr>
      ));
    }
  }

  refineArray(countryNames) {
    const { state } = this.props;
    if (state.isGenerated) {
      return countryNames.filter(name =>
        name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  }

  render() {
    const { state } = this.props;
    let countryNames = Object.keys(state.data);
    countryNames = this.refineArray(countryNames);
    return (
      <React.Fragment>
        <div className="container p-5">
          <table
            className="table table-striped table-dark"
            style={{ fontSize: "120%" }}
          >
            <thead className="thead-dark">
              <tr
                className="text-uppercase font-weight-bold"
                style={{ fontSize: "120%" }}
              >
                <th scope="col">Country</th>
                <th scope="col">Date (as of)</th>
                <th scope="col">Confirmed</th>
                <th scope="col">Deaths</th>
                <th scope="col">Recovered</th>
              </tr>
            </thead>
            <tbody>{this.renderTable(countryNames)}</tbody>
          </table>
        </div>
        ;
      </React.Fragment>
    );
  }
}

export default Main;
