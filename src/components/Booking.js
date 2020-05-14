import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import PropTypes from "prop-types";

function Message({ hotelName, startDate, endDate, duration }) {
  return (
    <div className="booking-message">
      You have successfully booked a room at {hotelName}.<br />
      Start Date: <time>{startDate}</time>
      <br />
      End Date: <time>{endDate}</time>
      <br />
      Total Length of Stay: {duration} Night(s).
    </div>
  );
}

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      duration: 0,
      booked: false,
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.book = this.book.bind(this);
  }

  handleDateChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
      duration: moment(endDate).diff(startDate, "days"),
    });
  }

  book() {
    this.setState({ booked: true });
  }

  render() {
    const { startDate, endDate, focusedInput, duration, booked } = this.state;
    const startStr = moment(startDate).format("dddd, D MMMM YYYY");
    const endStr = moment(endDate).format("dddd, D MMMM YYYY");

    return (
      <div className="booking">
        <p>Choose a date of Stay</p>

        <div className="booking-dates">
          <DateRangePicker
            startDate={startDate}
            startDateId="start_date_id"
            endDate={endDate}
            endDateId="end_date_id"
            onDatesChange={this.handleDateChange}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
          />
        </div>

        {booked && (
          <Message
            hotelName={this.props.hotelsiteName}
            startDate={startStr}
            endDate={endStr}
            duration={duration}
          />
        )}

        {!booked && (
          <button onClick={this.book} className="card__link">
            Book Now
          </button>
        )}
      </div>
    );
  }
}

Booking.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default Booking;
