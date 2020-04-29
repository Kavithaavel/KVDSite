import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import HotelDirectory from "./HotelDirectoryComponent";
import HotelsiteInfo from "./HotelsiteInfoComponent";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { HOTELSITES } from "../shared/hotelsites";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsites: HOTELSITES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <HotelDirectory hotelsites={this.state.hotelsites} />}
          />
          <Redirect to="/home" />
        </Switch>

        {/* <HotelDirectory
          hotelsites={this.state.hotelsites}
          onClick={(hotelsiteId) => this.onHotelsiteSelect(hotelsiteId)}
        /> */}

        <Footer />
      </div>
    );
  }
}

export default Main;
