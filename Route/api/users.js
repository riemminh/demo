const express = require("express");
const router = express.Router();

// load model
const User = require("../../Model/User");

// load validator
const validateUserInput = require("../../validator/validatorUser");

// @route /api/users/test
// @desc test
// @access PUBLIC
router.get("/test", (req, res) => res.json({ msg: "User Work!" }));

// @route /api/users/create_user
// @desc create new user
// @access PUBLIC
router.post("/create_user", (req, res) => {
  const { errors, isValid } = validateUserInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newUser = new User({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    idnumber: req.body.idnumber,
    address: req.body.address
  });
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
