const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require("./Config/keys").mongoURI;

// connect mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const users = require("./Route/api/users");

app.get("/", (req, res) => res.json({ msg: "HelloWord!" }));

app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server is running on port 5000"));
