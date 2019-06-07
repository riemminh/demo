import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <div className="container">
        <ul className="pagination">
          <li>
            <button>First</button>
          </li>
          <li>
            <button>Previous</button>
          </li>
          <li>
            <button className="active">1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button>Next</button>
          </li>
          <li>
            <button>Last</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
