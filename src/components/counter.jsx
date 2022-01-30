import React, { Component } from "react";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      timeNow: moment().format()
    };
  }

  //   handleClick = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };
  render() {
    return (
      <React.Fragment>
        <span className="badge bg-primary">{moment(this.props.timeExac).diff(this.state.timeNow, 'minutes')}</span>
        <span>{this.props.counter.value}</span>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
