const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicSchema = new Schema(
  {
    concepts: [String],
    entities: [String],
    notablePeople: [String]
  },
  // Don't auto-create an _id field
  { _id: false }
);

module.exports = topicSchema;
