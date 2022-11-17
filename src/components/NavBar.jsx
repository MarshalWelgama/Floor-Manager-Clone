import React, { Component } from "react";
import { Button } from "baseui/button";
import {
  DisplaySmall,
} from 'baseui/typography';
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

          <DisplaySmall style={{"color": "white"}}>KjuMi</DisplaySmall>
        </div>
      </div>
    );
  }
}

export default NavBar;
