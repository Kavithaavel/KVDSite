import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { Fade, Stagger } from "react-animation-components";

function PromotionList(props) {
  const promotions = props.promotions.promotions.map((promotions) => {
    return (
      <div>
        <Fade in key={promotions.id}>
          <Media list key={promotions.id}>
            <RenderPromotions promotions={promotions} />
          </Media>
        </Fade>
      </div>
    );
  });

  if (props.promotions.isLoading) {
    return <Loading />;
  }
  if (props.promotions.errMess) {
    return (
      <div className="col">
        <h4>{props.promotions.errMess}</h4>
      </div>
    );
  }
  return (
    <div className="col">
      <Media list>
        <Stagger in>{promotions}</Stagger>
      </Media>
    </div>
  );
}

function RenderPromotions({ promotions }) {
  if (promotions) {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-8">
            <Media
              object
              src={baseUrl + promotions.image}
              alt={promotions.name}
              width={400}
            />
            <Media body>
              <Media heading>{promotions.name}</Media>
              {promotions.description}
            </Media>
          </div>

          <div className="col-4">
            <Media
              object
              src={baseUrl + promotions.amen}
              alt={promotions.name}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
  return <div />;
}

function Promotions(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Top Deals</BreadcrumbItem>
          </Breadcrumb>
          <h2>Book Last Minute Hotel Deals!</h2>
          <hr />
        </div>
      </div>

      <div className="row row-content">
        <div className="col">
          <PromotionList promotions={props.promotions} />
        </div>
      </div>
    </div>
  );
}

export default Promotions;
