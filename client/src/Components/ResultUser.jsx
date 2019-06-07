import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "./Search";

class ResultUser extends Component {
  render() {
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
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>firstName</td>
              <td>lastName</td>
              <td>email</td>
              <td>idNumber</td>
              <td>telephone</td>
              <td>address</td>
              <td>
                <Link to="/edit/id" className="btn btn-info">
                  Edit
                </Link>
              </td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    );
  }
}

export default ResultUser;
