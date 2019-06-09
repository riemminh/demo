const isEmpty = require("./is-empty");
const validate = require("validator");

const validateUserInput = data => {
  let errors = {};
  data.firstname = data.firstname ? data.firstname : "";
  data.lastname = data.lastname ? data.lastname : "";
  data.email = data.email ? data.email : "";
  data.phone = data.phone ? data.phone : "";
  data.idnumber = data.idnumber ? data.idnumber : "";

  if (validate.isEmpty(data.firstname)) {
    errors.firstname = "Thông tin quan trọng không được để trống.";
  }

  if (validate.isEmpty(data.lastname)) {
    errors.lastname = "Thông tin quan trọng không được để trống.";
  }

  if (!validate.isEmail(data.email)) {
    errors.email = "Email sai hãy nhập như ví dụ: test@test.com";
  }
  if (validate.isEmpty(data.email)) {
    errors.email = "Thông tin quan trọng không được để trống.";
  }

  if (validate.isEmpty(data.phone)) {
    errors.phone = "Thông tin quan trọng không được để trống.";
  }

  if (validate.isEmpty(data.idnumber)) {
    errors.idnumber = "Thông tin quan trọng không được để trống.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateUserInput;
