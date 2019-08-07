const mongoose = require("mongoose");
const Topic = mongoose.model("topics");

module.exports = app => {
  // POST request to create multiple topics
  app.post("/api/topics/create", async (req, res) => {
    const { topicsArray } = req.body;

    // Creating multiple topics
    Topic.insertMany(topicsArray, (error, topics) => {
      if (error) {
        res.send(error);
      } else {
        res.send(topics);
      }
    });
  });
};
