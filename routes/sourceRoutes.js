const mongoose = require("mongoose");
// Models
const Source = mongoose.model("sources");
// Helpers
const arrayToObjectById = require("../utils/helpers");

module.exports = app => {
  // POST request to create mapping between media and associated Newt
  // content/skills/knowledge info
  app.post("/api/sources", async (req, res) => {
    const { name, url } = req.body;

    const source = new Source({
      name,
      url,
      dateAdded: Date.now(),
      lastUpdated: Date.now()
    });

    try {
      await source.save();

      res.send(source);
    } catch (error) {
      res.send(error);
    }
  });

  // GET request to fetch all source information
  app.get("/api/sources", (req, res) => {
    Source.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const sourcesById = arrayToObjectById(data);

        res.send(sourcesById);
      }
    });
  });

  // PUT request to add content to a source
  app.put("/api/sources/:sourceId/add-content", (req, res) => {
    const { sourceId } = req.params;
    const { mediaId, contentId } = req.body;

    Source.findOneAndUpdate(
      sourceId,
      {
        $push: {
          availableContent: {
            mediaId,
            contentId
          }
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
  });
};
