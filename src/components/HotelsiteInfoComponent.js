import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function RenderComments({ comments }) {
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

function RenderHotelsite({ hotelsite }) {
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

function HotelsiteInfo(props) {
  if (props.hotelsite) {
    return (
      <div className="container">
        <div className="row">
          <RenderHotelsite hotelsite={props.hotelsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default HotelsiteInfo;
