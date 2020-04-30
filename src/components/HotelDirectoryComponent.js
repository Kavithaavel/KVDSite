import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function RenderHotelDirectoryItem({ hotelsite, onClick }) {
  return (
    <Card>
      <Link to={`/directory/${hotelsite.id}`}>
        <CardImg width="100%" src={hotelsite.image} alt={hotelsite.name} />
        <CardImgOverlay>
          <CardTitle>{hotelsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function HotelDirectory(props) {
  const hotelDirectory = props.hotelsites.map((hotelsite) => {
    return (
      <div key={hotelsite.id} className="col-md-5 m-1">
        <RenderHotelDirectoryItem hotelsite={hotelsite} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{hotelDirectory}</div>
    </div>
  );
}

export default HotelDirectory;
