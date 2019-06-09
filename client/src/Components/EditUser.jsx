import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserId, updateUserId } from "../actions/userActions";

const action = { getUserId, updateUserId };

const mapState = state => ({
  errors: state.errors,
  user: state.user.user,
  current: state.user.current
});

class EditUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    idnumber: "",
    phone: "",
    address: "",
    errors: {}
  };
  componentDidMount() {
    this.props.getUserId(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.errors !== nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
    if (this.state.user !== nextProps.user) {
      this.setState({
        firstname: nextProps.user.firstname,
        lastname: nextProps.user.lastname,
        email: nextProps.user.email,
        idnumber: nextProps.user.idnumber,
        phone: nextProps.user.phone,
        address: nextProps.user.firstname || ""
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getUserId(this.props.match.params.id);
    }
  }

  handeOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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

    this.props.updateUserId(
      this.props.match.params.id,
      userData,
      this.props.history,
      this.props.current
    );
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="col-md-8 m-auto pb-3">
        <button
          onClick={() => this.props.history.goBack()}
          type="button"
          className="btn btn-warning mt-4"
        >
          GoBack
        </button>
        <h1 className="mt-2 mb-2 text-center">Edit User</h1>
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

          <button type="submit" className="send_form btn btn-success">
            Update User
          </button>
        </form>
      </div>
    );
  }
}
export default connect(
  mapState,
  action
)(EditUser);
