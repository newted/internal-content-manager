const mongoose = require("mongoose");
const { Schema } = mongoose;
const topicSchema = require("./Topic");

const knowledgeMapModuleSchema = new Schema({
  name: String,
  catalogNumber: String,
  parentCatalog: String,
  topics: topicSchema,
  dateAdded: Date,
  lastUpdated: Date
});

const knowledgeMapSchema = new Schema({
  name: String,
  catalogNumber: String,
  modules: [knowledgeMapModuleSchema],
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("knowledgeMap", knowledgeMapSchema);
