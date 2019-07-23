const mongoose = require("mongoose");
const { Schema } = mongoose;

const knowledgeGroupSchema = new Schema({
  name: String,
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "KnowledgeMap"
    }
  ]
});

mongoose.model("knowledgeGroup", knowledgeGroupSchema);
