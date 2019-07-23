const mongoose = require("mongoose");
const { Schema } = mongoose;
const topicSchema = require("./Topic");

const contentSchema = new Schema({
  name: String,
  url: String,
  partOfModule: Boolean,
  moduleId: {
    type: Schema.Types.ObjectId,
    ref: "ContentModule"
  },
  knowledgeMapClass: String, // Change to ObjectId ref later
  knowledgeMapSubclass: String, // ^^
  level: Number,
  primaryTopics: topicSchema,
  secondaryTopics: topicSchema,
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("content", contentSchema);
