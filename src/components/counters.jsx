import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: "james upgd 30 min" },
      { id: 2, value: 5 },
      { id: 3, value: 5 },
    ],
  };
  handleDelete = (countId) => {
    const counters = this.state.counters.filter((c) => c.id !== countId);
    this.setState({ counters });
    console.log("deleteing line", countId);
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.counters.map((counter) => (
            <li>
              <Counter
                key={counter.id}
                counter={counter}
                onDelete={this.handleDelete}
                timeExac={new Date().toLocaleString()}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
