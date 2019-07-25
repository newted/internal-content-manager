const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentModuleSchema = new Schema({
  name: String,
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "KnowledgeMap.modules"
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

mongoose.model("contentModules", contentModuleSchema);
