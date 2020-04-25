import React, { Component } from "react";

class HotelDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: [
        {
          id: 0,
          name: "Hyatt Place Hotel",
          image: "assets/images/Hyatt.jpg",
          elevation: 1233,
          description:
            "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.",
        },
        {
          id: 1,
          name: "Duxton Inn ",
          image: "assets/images/Duxton.jpg",
          elevation: 877,
          description:
            "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.",
        },
        {
          id: 2,
          name: "Holiday Inn",
          image: "assets/images/HolidayInn.jpg",
          elevation: 2901,
          description:
            "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.",
        },
        {
          id: 3,
          name: "Inter Continental",
          image: "assets/images/InterContinental.jpg",
          elevation: 42,
          description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods.",
        },
      ],
    };
  }

  render() {
    const hotelDirectory = this.state.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col">
          <img
            src={campsite.image}
            alt={campsite.name}
            width="200"
            height="200"
          />
          <h2>{campsite.name}</h2>
          <p>{campsite.description}</p>
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
