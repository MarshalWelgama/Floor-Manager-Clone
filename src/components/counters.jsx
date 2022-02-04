import React, { Component } from "react";
import moment from "moment";
import Counter from "./counter";

import "./css/counters.css";
class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: moment().format(),
      countersArr: this.props.countersArr,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: moment().format(),
      });
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    let previous = this.state;
    previous.countersArr = nextProps.countersArr;
    this.setState(previous);
  }

  handleDelete = (countId) => {
    const countersArr = this.state.countersArr.filter((c) => c.id !== countId);
    this.setState({ countersArr });
    this.props.onDeleteUpdate(countId);
    console.log("deleteing line", countId);
  };
  render() {
    return (
      <div>
        {this.state.countersArr.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            timeExac={this.state.curTime}
          />
        ))}
      </div>
    );
  }
}

export default Counters;