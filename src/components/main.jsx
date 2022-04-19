import React, { Component } from "react";
import NavBar from "./NavBar";
import Counters from "./counters";
import InputBar from "./inputBar";
import axios from "axios";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const API_URL = process.env.REACT_APP_API_URL;
class main extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor() {
    super();
    this.state = {
      counters: [],
      sessionId: window.location.pathname.substring(1),
      // counters: [
      //   { id: 1, information: "james upgd 30 min", number: "0411223344" },
      // ],
    };
  }
  componentDidMount() {
    this.getCustomers().then(console.log(this.state));
  }

  getCustomers = async () => {
    console.log(this.state.sessionId);
    const session = this.state.sessionId;
    //console.log("hi");
    let customers = await axios
      .get(`${API_URL}/api/${session}/customers`)
      .then((customers) => {
        console.log(customers.data);
        this.setState({ counters: customers.data });
      });
  };

  handleAdd = async (information, number) => {
    const { sessionId } = this.state;
    const { status } = await axios.post(
      `${API_URL}/api/${sessionId}/customers`,
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
    const { status } = await axios.delete(API_URL + "/api/customers/" + id);
    console.log(status);
    if (status == 200) {
      console.log("hi");
      this.getCustomers();
    }
  };
  render() {
    const { sessionId } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <meta name="theme-color" content="#42668e" />
        </Helmet>
        <NavBar session={this.state.sessionId} onAdd={this.handleAdd} />
        <Counters
          session={this.state.sessionId}
          countersArr={this.state.counters}
          onDeleteUpdate={this.handleDelete}
        />
        <InputBar session={this.state.sessionId} onAdd={this.handleAdd} />
      </React.Fragment>
    );
  }
}

export default main;
