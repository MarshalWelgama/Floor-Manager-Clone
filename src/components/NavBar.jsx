import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Emergency Floor Manager
          <span className="badge bade-pill badge-secondary">33333</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
