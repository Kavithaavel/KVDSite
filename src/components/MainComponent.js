import React, { Component } from "react";
import HotelDirectory from "./HotelDirectoryComponent";
import HotelsiteInfo from "./HotelsiteInfoComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Promotions from "./Promotions";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import {
  postComment,
  fetchHotelsites,
  fetchComments,
  fetchPromotions,
  fetchPartners,
  postFeedback,
  search,
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    hotelsites: state.hotelsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
    search_key: state.search_key,
  };
};

const mapDispatchToProps = {
  postComment: (hotelsiteId, rating, author, text) =>
    postComment(hotelsiteId, rating, author, text),
  postFeedback: (feedback) => postFeedback(feedback),
  fetchHotelsites: () => fetchHotelsites(),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
  fetchComments: () => fetchComments(),
  fetchPromotions: () => fetchPromotions(),
  fetchPartners: () => fetchPartners(),
  search: () => search(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchHotelsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchPartners();
    this.props.search();
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
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
          promotionLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errMess}
          partner={
            this.props.partners.partners.filter(
              (partner) => partner.featured
            )[0]
          }
          partnerLoading={this.props.partners.isLoading}
          partnerErrMess={this.props.partners.errMess}
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
          comments={this.props.comments.comments.filter(
            (comment) => comment.hotelsiteId === +match.params.hotelsiteId
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/directory"
                render={() => (
                  <HotelDirectory hotelsites={this.props.hotelsites} />
                )}
              />
              <Route
                path="/directory/:hotelsiteId"
                component={HotelsiteWithId}
              />
              <Route
                exact
                path="/contactus"
                render={() => (
                  <Contact
                    postFeedback={this.props.postFeedback}
                    resetFeedbackForm={this.props.resetFeedbackForm}
                  />
                )}
              />
              <Route
                exact
                path="/aboutus"
                render={() => <About partners={this.props.partners} />}
              />
              <Route
                exact
                path="/promotions"
                render={() => <Promotions partners={this.props.partners} />}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
