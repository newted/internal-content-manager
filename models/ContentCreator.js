const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentCreatorSchema = new Schema({
  name: String,
  modules: [
    {
      type: Schema.Types.ObjectId,
      ref: "ContentModule"
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
