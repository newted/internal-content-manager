const mongoose = require("mongoose");
const KnowledgeGroup = mongoose.model("knowledgeGroup");
const arrayToObjectById = require("../utils/helpers");

module.exports = app => {
  // POST request to create a knowledge group
  app.post("/api/knowledge-group/create", async (req, res) => {
    const { name } = req.body;

    const knowledgeGroup = new KnowledgeGroup({
      name
    });

    try {
      await knowledgeGroup.save();

      res.send(knowledgeGroup);
    } catch (error) {
      res.send(error);
    }
  });

  // GET request to fetch knowledge groups by id
  app.get("/api/knowledge-group/by-id", (req, res) => {
    KnowledgeGroup.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const knowledgeGroupById = arrayToObjectById(data);
        res.send(knowledgeGroupById);
      }
    });
  });

  // GET request to fetch knowledge groups grouped by name
  app.get("/api/knowledge-group/by-name", (req, res) => {
    KnowledgeGroup.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const knowledgeGroupByName = {};

        data.forEach(kGroup => (knowledgeGroupByName[kGroup.name] = kGroup));

        res.send(knowledgeGroupByName);
      }
    });
  });
};
