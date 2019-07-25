const mongoose = require("mongoose");
const Content = mongoose.model("content");
const arrayToObjectById = require("../utils/helpers");

module.exports = app => {
  // POST request to create a content item
  app.post("/api/content/item", async (req, res) => {
    const {
      name,
      url,
      partOfModule,
      moduleId,
      knowledgeMapId,
      knowledgeMapModuleId,
      level,
      primaryTopics,
      secondaryTopics
    } = req.body;

    const content = new Content({
      name,
      url,
      partOfModule,
      moduleId,
      knowledgeMapId,
      knowledgeMapModuleId,
      level,
      primaryTopics,
      secondaryTopics,
      dateAdded: Date.now(),
      lastUpdated: Date.now()
    });

    try {
      await content.save();

      res.send(content);
    } catch (error) {
      res.send(error);
    }
  });

  // GET request to fetch content items
  app.get("/api/content/item", (req, res) => {
    Content.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const contentById = arrayToObjectById(data);
        res.send(contentById);
      }
    });
  });
};
