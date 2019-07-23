const mongoose = require("mongoose");
const { Schema } = mongoose;
const topicSchema = require("./Topic");

const knowledgeMapModuleSchema = new Schema({
  name: String,
  catalogNumber: String,
  parentCatalog: String,
  topics: topicSchema
});

const knowledgeMapSchema = new Schema({
  name: String,
  catalogNumber: String,
  modules: [knowledgeMapModuleSchema]
});

mongoose.model("knowledgeMap", knowledgeMapSchema);
