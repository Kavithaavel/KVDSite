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

function PartnerList(props) {
  const partners = props.partners.partners.map((partner) => {
    return (
      <div>
        <Fade in key={partner._id}>
          <Media list key={partner._id}>
            <RenderPartner partner={partner} />
          </Media>
        </Fade>
      </div>
    );
  });

  if (props.partners.isLoading) {
    return <Loading />;
  }
  if (props.partners.errMess) {
    return (
      <div className="col">
        <h4>{props.partners.errMess}</h4>
      </div>
    );
  }
  return (
    <div className="col mt-4">
      <Media list>
        <Stagger in>{partners}</Stagger>
      </Media>
    </div>
  );
}

function RenderPartner({ partner }) {
  if (partner) {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <Media
              object
              src={baseUrl + partner.image}
              alt={partner.name}
              width={150}
            />
          </div>
          <div className="col">
            <Media body className="ml-5 mb-4">
              <Media heading>{partner.name}</Media>
              {partner.description}
            </Media>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return <div />;
}

function About(props) {
  // const partners = props.partners.map((partner) => {
  //   return (
  //     <Media list key={partner.id}>
  //       <RenderPartner partner={partner} />
  //     </Media>
  //   );
  // });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About KVD</BreadcrumbItem>
          </Breadcrumb>
          <h2>About KVD</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-sm-6">
          <h3>Our Mission</h3>
          <p>
            Since 2010, KVD has helped budget-savvy travelers explore the globe
            at a discount. We have access to some of the most innovative,
            intuitive technologies the travel industry has to offer. Whether you
            book right here on our website or using our award winning app, one
            thing is for sure – KVD can help you save big on your next trip.
          </p>
        </div>
        <div className="col-sm-6">
          <Card>
            <CardHeader className="bg-success text-white">
              <h3>Facts At a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">April 16, 2010</dd>
                <dt className="col-6">NASDAQ: KVD Stock Quote</dt>
                <dd className="col-6">$82.71 +0.7</dd>
                <dt className="col-6">Recent Quartley Results</dt>
                <dd className="col-6">
                  {" "}
                  <Link to="/home">2020 Q1</Link>
                </dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">101</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Success seems to be connected with action. Successful people
                  keep moving. They make mistakes, but they don't quit.
                </p>
                <footer className="blockquote-footer">
                  Conrad Hilton,{" "}
                  <cite title="Source Title">
                    Businessman "December 25, 1887 - January 3, 1979"
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Our Partners</h3>
        </div>
        <div className="col mt-4">
          <PartnerList partners={props.partners} />
        </div>
      </div>
    </div>
  );
}

export default About;
