const mongoose = require("mongoose");
const ContentModule = mongoose.model("contentModules");
const arrayToObjectById = require("../utils/helpers");

module.exports = app => {
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
      await contentModule.save();

      res.send(contentModule);
    } catch (error) {
      res.send(error);
    }
  });

  // GET request to fetch content modules
  app.get("/api/content/module", (req, res) => {
    ContentModule.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const contentModulesById = arrayToObjectById(data);
        res.send(contentModulesById);
      }
    });
  });
};
