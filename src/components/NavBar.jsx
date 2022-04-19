import React, { Component } from "react";
import { Button, Divider, Header } from "semantic-ui-react";
import "./css/NavBar.css";

class NavBar extends Component {
  render() {
    var { session } = this.props;
    return (
      <div className="parentDiv">
        <div className="navi">
          <div style={{ justifySelf: "start" }}>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(session);
              }}
            >
              Copy
            </Button>
          </div>

          <a style={{ "font-size": "xxx-large" }}>Gaffer</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
