const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentModuleSchema = new Schema({
  name: String,
  subjects: [String], // Might want to link this to knowledge maps?
  type: [String],
  url: String,
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "Content"
    }
  ],
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("contentModules", contentModuleSchema);
