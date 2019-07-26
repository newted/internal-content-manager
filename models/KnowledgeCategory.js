const mongoose = require("mongoose");
const { Schema } = mongoose;

const knowledgeCategorySchema = new Schema({
  name: String,
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "KnowledgeSubject"
    }
  ]
});

mongoose.model("knowledgeCategories", knowledgeCategorySchema);
