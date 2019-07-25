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
  knowledgeMapId: {
    type: Schema.Types.ObjectId,
    ref: "KnowledgeMap"
  },
  knowledgeMapModuleId: {
    type: Schema.Types.ObjectId,
    ref: "KnowledgeMap.modules"
  },
  level: Number,
  primaryTopics: topicSchema,
  secondaryTopics: topicSchema,
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("content", contentSchema);
