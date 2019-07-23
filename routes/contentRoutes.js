const mongoose = require("mongoose");
// Models
const ContentCreator = mongoose.model("contentCreators");

module.exports = app => {
  // POST request to create a content creator
  app.post("/api/content/creator", async (req, res) => {
    const { name, sourceId, url } = req.body;

    const contentCreator = new ContentCreator({
      name,
      url,
      sourceId,
      dateAdded: Date.now(),
      lastUpdated: Date.now()
    });

    try {
      await contentCreator.save();

      res.send(contentCreator);
    } catch (error) {
      res.send(error);
    }
  });
};
