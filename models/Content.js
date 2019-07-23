const mongoose = require("mongoose");
const { Schema } = mongoose;
const topicSchema = require("./Topic");

const contentSchema = new Schema({
  name: String,
  url: String,
  sourceInfo: {
    name: String,
    id: String
  },
  knowledgeMapClass: String, // Change to ObjectId ref later
  knowledgeMapSubclass: String, // ^^
  level: Number,
  primaryTopics: {
    type: Map,
    of: {
      ref: topicSchema
    }
  },
  secondaryTopics: {
    type: Map,
    of: {
      ref: topicSchema
    }
  },
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("content", contentSchema);
