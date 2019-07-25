const mongoose = require("mongoose");
const { Schema } = mongoose;

const sourceToContentInfoSchema = new Schema(
  {
    mediaId: String,
    contentId: {
      type: Schema.Types.ObjectId,
      ref: "Content"
    }
  },
  { _id: false }
);

const sourceMapSchema = new Schema({
  name: String,
  url: String,
  availableContent: [sourceToContentInfoSchema],
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("sourceMaps", sourceMapSchema);
