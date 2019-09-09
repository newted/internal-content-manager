const mongoose = require("mongoose");
const ContentSeries = mongoose.model("content-series");
const arrayToObjectById = require("../utils/helpers");

module.exports = app => {
  // POST request to create a content module
  app.post("/api/content/series", async (req, res) => {
    const { name, subjects, modules, type, url, contentCreatorId } = req.body;

    const contentSeries = new ContentSeries({
      name,
      subjects,
      modules,
      type,
      url,
      contentCreatorId,
      dateAdded: Date.now(),
      lastUpdated: Date.now()
    });

    try {
      await contentSeries.save();

      res.send(contentSeries);
    } catch (error) {
      res.send(error);
    }
  });

  // GET request to fetch content series
  app.get("/api/content/series/by-id", (req, res) => {
    ContentSeries.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        const contentSeriesById = arrayToObjectById(data);
        res.send(contentSeriesById);
      }
    });
  });
};
