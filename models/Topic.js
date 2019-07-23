const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicSchema = new Schema({
  concepts: [String],
  entities: [String],
  notablePeople: String
});

module.exports = topicSchema;
