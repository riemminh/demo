import React, { Component } from "react";

class Pagination extends Component {
  state = {
    pager: {}
  };
  componentDidMount() {
    this.getPager(this.props.totalUser, 1, 2);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.totalUser !== nextProps.totalUser) {
      this.getPager(nextProps.totalUser, this.state.pager.currentPage, 2);
    }
  }
  getCurrentPage = currentPage => {
    this.getPager(this.props.totalUser, currentPage, 2);
    this.props.getUserPagination(currentPage);
  };

  getPager = (totalUser, currentPage, pageSize) => {
    currentPage = currentPage || 1;
    pageSize = pageSize || 2;
    console.log(currentPage);
    let totalPages = Math.ceil(totalUser / pageSize);
    let startPage, endPage;
    if (currentPage <= 2) {
      startPage = 1;
      endPage = 2;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
      if (currentPage + 2 > totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      }
    }
    let pages;
    if (totalUser >= 5) {
      pages = [...Array(3).keys()].map(i => startPage + i);
    } else if (totalUser >= 2) {
      pages = [1, 2];
    } else {
      pages = [1];
    }
    this.props.setCurrentPagination(currentPage);
    this.setState({
      pager: {
        currentPage: currentPage,
        startPage: startPage,
        endPage: endPage,
        pages: pages,
        totalPages: totalPages
      }
    });
  };
  render() {
    const { pager } = this.state;
    return (
      <div className="container">
        <ul className="pagination">
          <li>
            <button onClick={() => this.getCurrentPage(1)}>First</button>
          </li>
          <li>
            <button
              className={
                pager.currentPage === pager.startPage ? "disabled" : ""
              }
              onClick={() => this.getCurrentPage(pager.currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {pager &&
            pager.pages &&
            pager.pages.map((btn, index) => (
              <li key={index}>
                <button
                  onClick={() => this.getCurrentPage(btn)}
                  className={pager.currentPage === btn ? "active" : ""}
                >
                  {btn}
                </button>
              </li>
            ))}

          <li>
            <button
              className={
                pager.currentPage === pager.totalPages ? "disabled" : ""
              }
              onClick={() => this.getCurrentPage(pager.currentPage + 1)}
            >
              Next
            </button>
          </li>
          <li>
            <button onClick={() => this.getCurrentPage(pager.totalPages)}>
              Last
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
