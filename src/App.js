import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import HotelDirectory from "./components/HotelDirectoryComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">KVD Tourism</NavbarBrand>
            <HotelDirectory />
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
