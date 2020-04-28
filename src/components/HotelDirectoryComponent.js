import React, { Component } from "react";

import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class HotelDirectory extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const hotelDirectory = this.props.hotelsites.map((hotelsite) => {
      return (
        <div key={hotelsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.props.onClick(hotelsite.id)}>
            <CardImg top src={hotelsite.image} alt={hotelsite.name} />
            <CardImgOverlay>
              <CardTitle>{hotelsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{hotelDirectory}</div>
      </div>
    );
  }
}

export default HotelDirectory;
