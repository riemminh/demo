import React, { Component } from "react";

class CreateUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    idnumber: "",
    phone: "",
    address: ""
  };
  handeOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
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
                className="form-control active_errors"
                id="firstName"
                placeholder="Enter First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handeOnChange}
              />
            </div>
            <div className="errors_active">
              Please provide a valid FirstName.
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">*_Last Name_*:</label>
            <div className="">
              <input
                type="text"
                className="form-control active_errors"
                id="lastName"
                placeholder="Enter Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handeOnChange}
              />
            </div>

            <div className="errors_active">
              Please provide a valid Last Name.
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">Email:</label>
            <div className="">
              <input
                type="text"
                className="active_errors form-control"
                id="email"
                placeholder="Enter Email"
                name="email"
                value={this.state.email}
                onChange={this.handeOnChange}
              />
            </div>
            <div className="errors_active">
              Please provide a valid Last Name.
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">*_ID Number_*:</label>
            <div className="">
              <input
                type="number"
                className="form-control active_errors"
                id="idnumber"
                placeholder="Enter ID Number"
                name="idnumber"
                value={this.state.idnumber}
                onChange={this.handeOnChange}
              />
            </div>

            <div className="errors_active">
              Please provide a valid ID Number.
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">*_TelePhone_*</label>
            <div className="">
              <input
                type="number"
                className="form-control active_errors"
                id="phone"
                placeholder="Enter TelePhone"
                name="phone"
                value={this.state.phone}
                onChange={this.handeOnChange}
              />
            </div>
            <div className="errors_active">
              Please provide a valid TelePhone.
            </div>
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
export default CreateUser;
