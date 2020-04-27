import React, { Component } from "react";
import HotelsiteInfo from "./HotelsiteInfoComponent";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class HotelDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHotelsite: null,
    };
  }
  onHotelsiteSelect(hotelsite) {
    this.setState({ selectedHotelsite: hotelsite });
  }

  render() {
    const hotelDirectory = this.props.hotelsites.map((hotelsite) => {
      return (
        <div key={hotelsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onHotelsiteSelect(hotelsite)}>
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
        <div className="row"><HotelsiteInfo hotelsite={this.state.selectedHotelsite} /></div>
      </div>
    );
  }
}

export default HotelDirectory;
