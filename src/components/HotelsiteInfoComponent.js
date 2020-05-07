import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      isModalOpen: false,
      touched: {
        author: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
    this.toggleModal();
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: 10 }}>
          <Button outline onClick={this.toggleModal}>
            <i className="fa fa-pencil fa-lg"> Submit Comment</i>
          </Button>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm
              initialState={{ rating: 1 }}
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="rating" xl={12}>
                  Rating
                </Label>
                <Col>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    placeholder="Rating"
                    className="form-control"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" xl={12}>
                  Your Name
                </Label>
                <Col>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="text" xl={12}>
                  Comment
                </Label>
                <Col>
                  <Control.textarea
                    model=".text"
                    id="text"
                    name="text"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

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
            <CommentForm />
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
