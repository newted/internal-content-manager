const mongoose = require("mongoose");
const KnowledgeMap = mongoose.model("knowledgeMap");
const arrayToObjectById = require("../utils/helpers");

module.exports = app => {
  // POST request to create a subject's knowledge map
  app.post("/api/knowledge-map/create", async (req, res) => {
    const { name, catalogNumber } = req.body;

    const knowledgeMap = new KnowledgeMap({
      name,
      catalogNumber,
      dateAdded: Date.now(),
      lastUpdated: Date.now()
    });

    try {
      await knowledgeMap.save();

      res.send(knowledgeMap);
    } catch (error) {
      res.send(error);
    }
  });

  // GET request to fetch knowledge map by mongo Id
  app.get("/api/knowledge-map/by-id", (req, res) => {
    KnowledgeMap.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const knowledgeMapById = arrayToObjectById(data);
        res.send(knowledgeMapById);
      }
    });
  });

  // GET request to fetch knowledge map by catalog number
  app.get("/api/knowledge-map/by-catalog-num", (req, res) => {
    KnowledgeMap.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const knowledgeMapByCatNum = {};

        data.forEach(kMap => (knowledgeMapByCatNum[kMap.catalogNumber] = kMap));

        res.send(knowledgeMapByCatNum);
      }
    });
  });
};
