import React, { Component } from "react";
import NavBar from "./NavBar";
import Counters from "./counters";
import InputBar from "./inputBar";
import axios from "axios";
class main extends Component {
  constructor() {
    super();
    this.state = {
      counters: [],
      // counters: [
      //   { id: 1, information: "james upgd 30 min", number: "0411223344" },
      // ],
    };
  }
  componentDidMount() {
    this.getCustomers().then(console.log(this.state));
  }

  getCustomers = async () => {
    let customers = axios
      .get("http://localhost:5000/api/620cd6b4205e3178fba0252c/customers")
      .then((customers) => {
        console.log(customers.data);
        this.setState({ counters: customers.data });
      });
  };

  handleAdd = (information) => {
    const id = Math.floor(Math.random() * 101);
    let previousCounter = this.state.counters.slice();

    previousCounter.push({ id: id, information: information });

    this.setState({ counters: previousCounter });
    console.log(information);
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
        <InputBar onAdd={this.handleAdd} />
      </React.Fragment>
    );
  }
}

export default main;
