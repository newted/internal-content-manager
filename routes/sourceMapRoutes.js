const mongoose = require("mongoose");
// Models
const SourceMap = mongoose.model("sourceMaps");

module.exports = app => {
  // POST request to create mapping between media and associated Newt
  // content/skills/knowledge info
  app.post("/api/source-map", async (req, res) => {
    const { name, url } = req.body;

    const sourceMap = new SourceMap({
      name,
      url,
      dateAdded: Date.now(),
      lastUpdated: Date.now()
    });

    try {
      await sourceMap.save();

      res.send(sourceMap);
    } catch (error) {
      res.send(error);
    }
  });
};
