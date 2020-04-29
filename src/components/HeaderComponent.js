import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row my-auto">
              <div className="col">
                <h1>KVD Tourism</h1>
              </div>
              <div className="col my-auto">
                <h3>Enjoy your vacation!</h3>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top">
          <div className="container">
            <NavbarBrand href="/">KVD Tourism</NavbarBrand>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
