import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="mb-3">
        <form className="form-inline mr-auto">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            name="search"
          />
          <button
            className="btn btn-outline-success btn-rounded btn-sm my-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
