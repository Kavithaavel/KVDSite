import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import HotelDirectory from "./components/HotelDirectoryComponent";
import { HOTELSITES } from "./Shared/hotelsites";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsites: HOTELSITES,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">KVD Tourism</NavbarBrand>
            <HotelDirectory hotelsites={this.state.hotelsites} />
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
