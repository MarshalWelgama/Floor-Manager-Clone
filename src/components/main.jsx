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
    //console.log("hi");
    let customers = await axios
      .get("http://localhost:5000/api/620cd6b4205e3178fba0252c/customers")
      .then((customers) => {
        console.log(customers.data);
        this.setState({ counters: customers.data });
      });
  };

  handleAdd = async (information, number) => {
    const { status } = await axios.post(
      "http://localhost:5000/api/620cd6b4205e3178fba0252c/customers",
      {
        information: information,
        number: number,
      }
    );
    if (status == 200) {
      this.getCustomers();
    }
  };

  handleDelete = async (id) => {
    const { status } = await axios.delete(
      "http://localhost:5000/api/customers/" + id
    );
    console.log(status);
    if (status == 200) {
      console.log("hi");
      this.getCustomers();
    }
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
