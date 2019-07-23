const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

// Require models
require("./models/SourceMap");
require("./models/ContentCreator");
require("./models/ContentModule");
require("./models/Content");

const app = express();

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.send({ message: "Welcome to Newt Internal Tools." })
);

// Require routes
require("./routes/sourceMapRoutes")(app);
require("./routes/contentRoutes")(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT);
