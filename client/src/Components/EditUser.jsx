import React, { Component } from "react";

class EditUser extends Component {
  render() {
    return (
      <div className="col-md-8 m-auto pb-3">
        <button type="button" className="btn btn-warning mt-4">
          GoBack
        </button>
        <h1 className="mt-2 mb-2 text-center">Edit User</h1>
        <p className="text-center">(*_Field_* = required )</p>
        <form className="form-horizontal mt-3">
          <div className="form-group">
            <label className="control-label">*_First Name_* :</label>
            <div className="">
              <input
                type="text"
                className="form-control active_errors"
                id="firstName"
                placeholder="Enter First Name"
                name="firstName"
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
                type="text"
                className="form-control active_errors"
                id="idnumber"
                placeholder="Enter ID Number"
                name="idnumber"
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
                type="text"
                className="form-control active_errors"
                id="phone"
                placeholder="Enter TelePhone"
                name="phone"
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
              />
            </div>
          </div>

          <button type="submit" className="send_form btn btn-success">
            Update User
          </button>
        </form>
      </div>
    );
  }
}
export default EditUser;
