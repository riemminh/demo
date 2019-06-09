import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewUser } from "../actions/userActions";

const action = { createNewUser };

const mapState = state => ({
  errors: state.errors
});

class CreateUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    idnumber: "",
    phone: "",
    address: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.errors !== nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handeOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  resetFrom = () => {
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      idnumber: "",
      phone: "",
      address: "",
      errors: {}
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      idnumber: this.state.idnumber,
      phone: this.state.phone,
      address: this.state.address
    };
    this.props.createNewUser(userData, this.resetFrom);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="col-md-8 m-auto pb-3">
        <h1 className="mt-5 mb-2 text-center">Create User</h1>
        <p className="text-center">(*_Field_* = required )</p>
        <form className="form-horizontal mt-3" onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label className="control-label">*_First Name_* :</label>
            <div className="">
              <input
                type="text"
                className={
                  errors.firstname
                    ? "form-control active_errors"
                    : "form-control"
                }
                id="firstName"
                placeholder="Enter First Name"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handeOnChange}
              />
            </div>
            {errors.firstname && (
              <div className="errors_active">{errors.firstname}</div>
            )}
          </div>
          <div className="form-group">
            <label className="control-label">*_Last Name_*:</label>
            <div className="">
              <input
                type="text"
                className={
                  errors.lastname
                    ? "form-control active_errors"
                    : "form-control "
                }
                id="lastname"
                placeholder="Enter Last Name"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handeOnChange}
              />
            </div>
            {errors.lastname && (
              <div className="errors_active">{errors.lastname}</div>
            )}
          </div>
          <div className="form-group">
            <label className="control-label">Email:</label>
            <div className="">
              <input
                type="text"
                className={
                  errors.email ? "form-control active_errors" : "form-control "
                }
                id="email"
                placeholder="Enter Email. Example: test@test.com"
                name="email"
                value={this.state.email}
                onChange={this.handeOnChange}
              />
            </div>
            {errors.email && (
              <div className="errors_active">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label className="control-label">*_ID Number_*:</label>
            <div className="">
              <input
                type="number"
                className={
                  errors.idnumber
                    ? "form-control active_errors"
                    : "form-control "
                }
                id="idnumber"
                placeholder="Enter ID Number. Example: 123456789"
                name="idnumber"
                value={this.state.idnumber}
                onChange={this.handeOnChange}
              />
            </div>
            {errors.idnumber && (
              <div className="errors_active">{errors.idnumber}</div>
            )}
          </div>
          <div className="form-group">
            <label className="control-label">*_TelePhone_*</label>
            <div className="">
              <input
                type="number"
                className={
                  errors.phone ? "form-control active_errors" : "form-control "
                }
                id="phone"
                placeholder="Enter TelePhone. Example: 123456789"
                name="phone"
                value={this.state.phone}
                onChange={this.handeOnChange}
              />
            </div>
            {errors.phone && (
              <div className="errors_active">{errors.phone}</div>
            )}
          </div>
          <div className="form-group">
            <label className="control-label">Address:</label>
            <div className="">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Address"
                name="address"
                value={this.state.address}
                onChange={this.handeOnChange}
              />
            </div>
          </div>

          <button type="submit" className="send_form btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default connect(
  mapState,
  action
)(CreateUser);
