import React, { Component } from "react";
import { connect } from "react-redux";
import { getNameAllUser, getUserPagination } from "../actions/userActions";

const action = {
  getNameAllUser,
  getUserPagination
};

const mapState = state => ({
  nameall: state.user.nameall
});

class Search extends Component {
  state = {
    items: [],
    suggestions: [],
    text: ""
  };
  componentDidMount() {
    this.props.getNameAllUser();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.nameall !== this.props.nameall) {
      this.setState({
        items: nextProps.nameall
      });
    }
  }
  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.state.items.sort().filter(v => regex.test(v));
    }
    this.setState({
      text: value,
      suggestions
    });
  };

  suggestionSelected = value => {
    this.setState({
      text: value,
      suggestions: []
    });
    setTimeout(() => {
      this.props.getUserPagination(1, this.state.text);
    }, 300);
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className="list-group">
        {suggestions.map((item, index) => (
          <li
            onClick={() => this.suggestionSelected(item)}
            className="list-group-item"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <div className="mb-3">
        <form className="form-inline mr-auto">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            value={this.state.text}
            aria-label="Search"
            name="search"
            onChange={this.onTextChanged}
          />
          {/* <button
            className="btn btn-outline-success btn-rounded btn-sm my-0"
            type="submit"
          >
            Search
          </button> */}
        </form>
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default connect(
  mapState,
  action
)(Search);
