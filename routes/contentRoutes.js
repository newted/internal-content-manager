const mongoose = require("mongoose");
// Models
const ContentCreator = mongoose.model("contentCreators");
const ContentModule = mongoose.model("contentModules");

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

  // POST request to create a content module
  app.post("/api/content/module", async (req, res) => {
    const { name, type, url, contentCreatorId } = req.body;

    const contentModule = new ContentModule({
      name,
      type,
      url,
      contentCreatorId,
      dateAdded: Date.now(),
      lastUpdated: Date.now()
    });

    try {
      contentModule.save();

      res.send(contentModule);
    } catch (error) {
      res.send(error);
    }
  });
};
