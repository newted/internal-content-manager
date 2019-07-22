const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

// Require models
require("./models/SourceMap");

const app = express();

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.send({ message: "Welcome to Newt Internal Tools." })
);

const PORT = process.env.PORT || 9000;
app.listen(PORT);
