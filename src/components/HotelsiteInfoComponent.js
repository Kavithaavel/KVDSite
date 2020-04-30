import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

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
          <CardImg src={`/${hotelsite.image}`} alt={hotelsite.name} />
          <CardBody>
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
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Hotel Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.hotelsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.hotelsite.name}</h2>
            <hr />
          </div>
        </div>
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
