import React from "react";

import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderHotelDirectoryItem({ hotelsite, onClick }) {
  return (
    <Card onClick={() => onClick(hotelsite.id)}>
      <CardImg top src={hotelsite.image} alt={hotelsite.name} />
      <CardImgOverlay>
        <CardTitle>{hotelsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function HotelDirectory(props) {
  const hotelDirectory = props.hotelsites.map((hotelsite) => {
    return (
      <div key={hotelsite.id} className="col-md-5 m-1">
        <RenderHotelDirectoryItem
          hotelsite={hotelsite}
          onClick={props.onClick}
        />
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
