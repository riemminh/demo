const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  lastname: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  idnumber: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = User = mongoose.model("user", UserSchema);
