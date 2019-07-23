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
  source: {
    type: Schema.Types.ObjectId,
    ref: "SourceMap"
  },
  url: String,
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("contentCreators", contentCreatorSchema);
