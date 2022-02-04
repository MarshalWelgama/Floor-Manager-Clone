import React, { Component } from "react";
import { Divider, Header } from "semantic-ui-react";
import "./css/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="parentDiv">
        <div className="navi">
          <a style={{ "font-size": "xx-large" }}>Emergency Floor Manager</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
