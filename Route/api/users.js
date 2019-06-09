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
// @route /api/users/get_all_name_user
// @desc get all user
// @access PUBLIC
router.get("/get_all_name_user", (req, res) => {
  User.find({}, { lastname: 1 })
    .then(user => {
      if (user) {
        const name = user.map(item => item.lastname);
        res.json(name);
      }
    })
    .catch(err => res.status(400).json(err));
});
// @route /api/users/search_user_pagination/:currentPage
// @desc Get all User
// @access PUBLIC
router.post("/search_user_pagination/:currentPage", (req, res) => {
  const pageSize = 2;
  const currentPage = req.params.currentPage
    ? parseInt(req.params.currentPage)
    : 1;
  User.find({ lastname: { $regex: req.body.textSearch, $options: "si" } })
    .countDocuments()
    .then(totalUser => {
      User.find({ lastname: { $regex: req.body.textSearch, $options: "si" } })
        .skip(pageSize * (currentPage - 1))
        .limit(2)
        .sort({ date: -1 })
        .then(user => {
          res.json({
            totalUser,
            user
          });
        });
    })
    .catch(err => res.status(400).json(err));
});

// @route /api/users/get_user_pagination/:currentPage
// @desc Get all User
// @access PUBLIC
router.get("/get_user_pagination/:currentPage", (req, res) => {
  const pageSize = 2;
  const currentPage = req.params.currentPage
    ? parseInt(req.params.currentPage)
    : 1;
  User.find()
    .countDocuments()
    .then(totalUser => {
      User.find()
        .skip(pageSize * (currentPage - 1))
        .limit(2)
        .sort({ date: -1 })
        .then(user => {
          res.json({
            totalUser,
            user
          });
        });
    })
    .catch(err => res.status(400).json(err));
});

// @route /api/users/delete/:id_user
// @desc delete user
// @access PUBLIC
router.delete("/delete/:id_user", (req, res) => {
  User.findOneAndRemove({ _id: req.params.id_user })
    .then(() => res.json({ msg: "success" }))
    .catch(err => res.status(400).json(err));
});

// @route /api/users/get_user/:id_user
// @desc get user id
// @access PUBLIC
router.get("/get_user/:id_user", (req, res) => {
  User.findById({ _id: req.params.id_user })
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(400).json(err));
});

// @route /api/users/update_user/:id_user
// @desc upapte user id
// @access PUBLIC
router.put("/update_user/:id_user", (req, res) => {
  const { errors, isValid } = validateUserInput(req.body);

  if (!isValid) {
    return res.json(errors);
  }

  const id = req.params.id_user;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
