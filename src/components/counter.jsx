import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      curTime: null,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  }
  //   handleClick = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };
  render() {
    return (
      <React.Fragment>
        <span className="badge bg-primary">
          {this.props.timeExac - this.state.curTime}
        </span>
        <span className="badge bg-primary">{this.props.timeExac}</span>
        <span>{this.props.counter.value}</span>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
