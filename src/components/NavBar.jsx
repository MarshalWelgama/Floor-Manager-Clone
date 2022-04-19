import React, { Component } from "react";
import { Button, Divider, Header } from "semantic-ui-react";
import "./css/NavBar.css";

class NavBar extends Component {
  render() {
    var { session } = this.props;
    return (
      <div className="parentDiv">
        <div className="navi">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(session);
            }}
          >
            Copy
          </Button>
          <a style={{ "font-size": "xx-large" }}>Emergency Floor Manager</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
