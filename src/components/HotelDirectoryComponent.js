import React, { Component } from "react";
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

  renderSelectedHotelsite(hotelsite) {
    if (hotelsite) {
      return (
        <Card>
          <CardImg top src={hotelsite.image} alt={hotelsite.name} />
          <CardBody>
            <CardTitle>{hotelsite.name}</CardTitle>
            <CardTitle>{hotelsite.description}</CardTitle>
          </CardBody>
        </Card>
      );
    }

    return <div />;
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
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedHotelsite(this.state.selectedHotelsite)}
          </div>
        </div>
      </div>
    );
  }
}

export default HotelDirectory;
