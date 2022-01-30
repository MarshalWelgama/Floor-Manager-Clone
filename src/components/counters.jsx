import React, { Component } from "react";
import moment from "moment";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super()
    this.state = {

        counters: [
          { id: 1, value: "james upgd 30 min" },
          { id: 2, value: 5 },
          { id: 3, value: 5 },
        ],
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: moment().format(),
      });
    }, 1000);
  }
 
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
                timeExac={this.state.curTime}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
