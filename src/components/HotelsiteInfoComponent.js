import React, { Component } from "react";

import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

class HotelsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  renderHotelsite(hotelsite) {
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
        <div className="container">
          <div className="row">
            {this.renderHotelsite(this.props.hotelsite)}
            {this.renderComments(this.props.hotelsite.comments)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default HotelsiteInfo;
