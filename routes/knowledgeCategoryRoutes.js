const mongoose = require("mongoose");
const KnowledgeCategory = mongoose.model("knowledge-categories");
const arrayToObjectById = require("../utils/helpers");

module.exports = app => {
  // POST request to create a knowledge group
  app.post("/api/knowledge-category/create", async (req, res) => {
    const { name } = req.body;

    const knowledgeCategory = new KnowledgeCategory({
      name
    });

    try {
      await knowledgeCategory.save();

      res.send(knowledgeCategory);
    } catch (error) {
      res.send(error);
    }
  });

  // GET request to fetch knowledge groups by id
  app.get("/api/knowledge-category/by-id", (req, res) => {
    KnowledgeCategory.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const knowledgeCategoryById = arrayToObjectById(data);
        res.send(knowledgeCategoryById);
      }
    });
  });

  // GET request to fetch knowledge groups grouped by name
  app.get("/api/knowledge-category/by-name", (req, res) => {
    KnowledgeCategory.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const knowledgeCategoryByName = {};

        data.forEach(kGroup => (knowledgeCategoryByName[kGroup.name] = kGroup));

        res.send(knowledgeCategoryByName);
      }
    });
  });

  // PUT request to add a knowledge map subject into a knowledge group
  app.put(
    "/api/knowledge-category/:knowledgeCategoryId/add-subject",
    (req, res) => {
      const { knowledgeCategoryId } = req.params;
      const { knowledgeSubjectId } = req.body;

      KnowledgeCategory.findOneAndUpdate(
        knowledgeCategoryId,
        {
          $push: {
            subjects: knowledgeSubjectId
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
