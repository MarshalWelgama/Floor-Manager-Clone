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
    console.log(this.state);
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
    var { session } = this.props;
    return (
      <div>
        {this.state.countersArr.map((counter) => (
          <Counter
            session={session}
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
