const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentSeriesSchema = new Schema({
  name: String,
  // Reference to Knowledge Subjects
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "KnowledgeSubject"
    }
  ],
  // Reference to Knowledge Modules
  modules: [
    {
      type: Schema.Types.ObjectId,
      ref: "KnowledgeSubject.modules"
    }
  ],
  type: [String],
  url: String,
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "Content"
    }
  ],
  contentCreatorId: {
    type: Schema.Types.ObjectId,
    ref: "ContentCreator"
  },
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("contentSeries", contentSeriesSchema);
