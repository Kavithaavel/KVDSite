import React, { Component } from "react";
//import { search } from "../../store/actions";
import "./bar.scss";

const search = (key) => {
  return {
    type: "SEARCH",
    key,
  };
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.search_key,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(search(this.state.key));
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="key"
          className="search-bar__input"
          autoComplete="off"
          placeholder="City or Hotel"
          onChange={this.handleChange}
          value={this.state.key}
        />
        <button type="submit" className="search-bar__btn">
          Search...
        </button>
      </form>
    );
  }
}

export default SearchBar;
