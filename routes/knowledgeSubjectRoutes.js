const mongoose = require("mongoose");
const KnowledgeSubject = mongoose.model("knowledgeSubjects");
const arrayToObjectById = require("../utils/helpers");

module.exports = app => {
  // POST request to create a subject's knowledge map
  app.post("/api/knowledge-subject/create", async (req, res) => {
    const { name, catalogNumber, categoryId } = req.body;

    const knowledgeSubject = new KnowledgeSubject({
      name,
      catalogNumber,
      categoryId,
      dateAdded: Date.now(),
      lastUpdated: Date.now()
    });

    try {
      await knowledgeSubject.save();

      res.send(knowledgeSubject);
    } catch (error) {
      res.send(error);
    }
  });

  // GET request to fetch knowledge map by mongo Id
  app.get("/api/knowledge-subject/by-id", (req, res) => {
    KnowledgeSubject.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const knowledgeSubjectById = arrayToObjectById(data);
        res.send(knowledgeSubjectById);
      }
    });
  });

  // GET request to fetch knowledge map by catalog number
  app.get("/api/knowledge-subject/by-catalog-num", (req, res) => {
    KnowledgeSubject.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const knowledgeSubjectByCatNum = {};

        data.forEach(
          kMap => (knowledgeSubjectByCatNum[kMap.catalogNumber] = kMap)
        );

        res.send(knowledgeSubjectByCatNum);
      }
    });
  });

  // PUT request to add content modules to knowledge maps
  app.put(
    "/api/knowledge-subject/:knowledgeSubjectId/add-module",
    (req, res) => {
      const { knowledgeSubjectId } = req.params;
      const { knowledgeModule } = req.body;

      KnowledgeSubject.findOneAndUpdate(
        knowledgeSubjectId,
        {
          $push: {
            modules: knowledgeModule
          },
          $set: {
            lastUpdated: Date.now()
          }
        },
        {
          new: true
        },
        (error, data) => {
          if (error) {
            res.send(error);
          } else {
            res.send(data);
          }
        }
      );
    }
  );
};
