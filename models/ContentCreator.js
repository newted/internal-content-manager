const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentCreatorSchema = new Schema({
  name: String,
  // Reference to Content Series
  series: [
    {
      type: Schema.Types.ObjectId,
      ref: "ContentSeries"
    }
  ],
  // Reference to Content that are not part of a Series
  individualContent: [
    {
      type: Schema.Types.ObjectId,
      ref: "Content"
    }
  ],
  sourceId: {
    type: Schema.Types.ObjectId,
    ref: "Source"
  },
  url: String,
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("contentCreators", contentCreatorSchema);
