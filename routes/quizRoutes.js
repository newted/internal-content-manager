const mongoose = require("mongoose");
const Quiz = mongoose.model("quizzes");

module.exports = app => {
  // POST request to create a quiz
  app.post("/api/quiz/create", async (req, res) => {
    const { contentId, questions } = req.body;

    const quiz = new Quiz({
      contentId,
      questions
    });

    try {
      await quiz.save();

      res.send(quiz);
    } catch (error) {
      res.send(error);
    }
  });
};
