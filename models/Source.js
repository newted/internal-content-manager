const mongoose = require("mongoose");
const { Schema } = mongoose;

const availableContentSchema = new Schema(
  {
    mediaId: String,
    contentId: {
      type: Schema.Types.ObjectId,
      ref: "Content"
    }
  },
  { _id: false }
);

const sourceSchema = new Schema({
  name: String,
  url: String,
  availableContent: [availableContentSchema],
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("sources", sourceSchema);
