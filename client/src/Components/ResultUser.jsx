import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "./Search";
import {
  getUserPagination,
  deleteUser,
  setCurrentPagination
} from "../actions/userActions";

const action = {
  getUserPagination,
  deleteUser,
  setCurrentPagination
};

const mapState = state => ({
  allUser: state.user.allUser,
  loading: state.user.loading,
  total: state.user.total,
  textSearch: state.user.textSearch
});

class ResultUser extends Component {
  state = {
    totalUser: null
  };
  componentDidMount() {
    this.props.getUserPagination();
  }
  componentWillReceiveProps(nextProps) {
    const { total } = this.props;
    if (total !== nextProps.total) {
      this.setState({
        totalUser: nextProps.total
      });
    }
  }
  render() {
    const { allUser } = this.props;

    const tr =
      allUser &&
      allUser.user.map((tr, index) => (
        <tr key={tr._id}>
          <th scope="row">{index + 1}</th>
          <td>{tr.firstname}</td>
          <td>{tr.lastname}</td>
          <td>{tr.email}</td>
          <td>{tr.idnumber}</td>
          <td>{tr.phone}</td>
          <td>{tr.address}</td>
          <td>
            <Link to={`/edit/${tr._id}`} className="btn btn-info">
              Edit
            </Link>
          </td>
          <td>
            <button
              onClick={() => this.props.deleteUser(tr._id)}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    return (
      <div className="col-sm-12 pt-5">
        <Search />
        <table className="table table-hover table-dark table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">ID Number</th>
              <th scope="col">TelePhone</th>
              <th scope="col">Address</th>
              <th scope="col">Edit User</th>
              <th scope="col">Delete User</th>
            </tr>
          </thead>
          <tbody>{tr}</tbody>
        </table>
        {this.state.totalUser && (
          <Pagination
            textSearch={this.props.textSearch}
            setCurrentPagination={this.props.setCurrentPagination}
            totalUser={this.state.totalUser}
            getUserPagination={this.props.getUserPagination}
          />
        )}
      </div>
    );
  }
}

export default connect(
  mapState,
  action
)(ResultUser);
