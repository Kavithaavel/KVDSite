import React, { Component } from "react";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class HotelsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selectedHotelsite: null,
    };
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div className="col">
          <Card>
            <CardBody>
              <CardTitle>Comments</CardTitle>
            </CardBody>
            <CardBody>
              {comments.map((comment) => (
                <div key={comment.id}>
                  {comment.text} <br />
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      );
    }
    return <div />;
  }

  renderCampsite(hotelsite) {
    if (hotelsite) {
      return (
        <div className="col m-1">
          <Card>
            <CardImg top src={hotelsite.image} alt={hotelsite.name} />
            <CardBody>
              <CardTitle>{hotelsite.name}</CardTitle>
              <CardTitle>{hotelsite.description}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    }
    return <div />;
  }

  render() {
    if (this.props.hotelsite) {
      return (
        <div className="row">
          <div className="col m-1">
            {this.renderCampsite(this.props.hotelsite)}
          </div>
          <div className="col m-1">
            {this.renderComments(this.props.hotelsite.comments)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default HotelsiteInfo;
