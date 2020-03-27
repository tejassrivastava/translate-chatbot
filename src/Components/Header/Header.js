import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-custom">
          <Navbar.Brand href="#home">
            <span className="ai_playground">AI Playground</span>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
