const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.send({ message: "Welcome to Newt Internal Tools." })
);

const PORT = process.env.PORT || 9000;
app.listen(PORT);
