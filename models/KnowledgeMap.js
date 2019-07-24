const mongoose = require("mongoose");
const { Schema } = mongoose;
const topicSchema = require("./Topic");

const knowledgeMapModuleSchema = new Schema({
  name: String,
  catalogNumber: String,
  parentId: {
    type: Schema.Types.ObjectId,
    ref: "KnowledgeMap"
  },
  parentCatalog: String,
  topics: topicSchema,
  dateAdded: Date,
  lastUpdated: Date
});

const knowledgeMapSchema = new Schema({
  name: String,
  catalogNumber: String,
  parentId: {
    type: Schema.Types.ObjectId,
    ref: "KnowledgeGroup"
  },
  modules: [knowledgeMapModuleSchema],
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("knowledgeMap", knowledgeMapSchema);
