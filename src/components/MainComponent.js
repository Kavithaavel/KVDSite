import React, { Component } from "react";
import HotelDirectory from "./HotelDirectoryComponent";
import HotelsiteInfo from "./HotelsiteInfoComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment, fetchHotelsites } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    hotelsites: state.hotelsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};

const mapDispatchToProps = {
  addComment: (hotelsiteId, rating, author, text) =>
    addComment(hotelsiteId, rating, author, text),
  fetchHotelsites: () => fetchHotelsites(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchHotelsites();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          hotelsite={
            this.props.hotelsites.hotelsites.filter(
              (hotelsite) => hotelsite.featured
            )[0]
          }
          hotelsitesLoading={this.props.hotelsites.isLoading}
          hotelsitesErrMess={this.props.hotelsites.errMess}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          partner={this.props.partners.filter((partner) => partner.featured)[0]}
        />
      );
    };

    const HotelsiteWithId = ({ match }) => {
      return (
        <HotelsiteInfo
          hotelsite={
            this.props.hotelsites.hotelsites.filter(
              (hotelsite) => hotelsite.id === +match.params.hotelsiteId
            )[0]
          }
          isLoading={this.props.hotelsites.isLoading}
          errMess={this.props.hotelsites.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.hotelsiteId === +match.params.hotelsiteId
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <HotelDirectory hotelsites={this.props.hotelsites} />}
          />
          <Route path="/directory/:hotelsiteId" component={HotelsiteWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            render={() => <About partners={this.props.partners} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
