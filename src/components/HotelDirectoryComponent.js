import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderHotelDirectoryItem({ hotelsite, onClick }) {
  return (
    <Card>
      <Link to={`/directory/${hotelsite.id}`}>
        <CardImg
          width="100%"
          src={baseUrl + hotelsite.image}
          alt={hotelsite.name}
        />
        <CardImgOverlay>
          <CardTitle>{hotelsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function HotelDirectory(props) {
  const hotelDirectory = props.hotelsites.hotelsites.map((hotelsite) => {
    return (
      <div key={hotelsite.id} className="col-md-5 m-1">
        <RenderHotelDirectoryItem hotelsite={hotelsite} />
      </div>
    );
  });
  if (props.hotelsites.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.hotelsites.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{props.hotelsites.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Hotel Directory</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="row">{hotelDirectory}</div>
    </div>
  );
}

export default HotelDirectory;
