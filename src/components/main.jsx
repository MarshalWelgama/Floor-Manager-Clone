import React, { Component } from "react";
import NavBar from "./NavBar";
import Counters from "./counters";

class main extends Component {
  state = {
    counters: [{ id: 1, value: "james upgd 30 min" }],
  };

  handleAdd = (value) => {
    const id = Math.floor(Math.random() * 101);
    let previousCounter = this.state.counters.slice();

    previousCounter.push({ id: id, value: value });

    this.setState({ counters: previousCounter });
    console.log(value);
    console.log(this.state);
  };

  handleDelete = (countId) => {
    const counters = this.state.counters.filter((c) => c.id !== countId);
    this.setState({ counters });
    console.log("deleteing line from main");
  };
  render() {
    return (
      <React.Fragment>
        <NavBar onAdd={this.handleAdd} />
        <Counters
          countersArr={this.state.counters}
          onDeleteUpdate={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default main;
