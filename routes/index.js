module.exports = app => {
  Object.assign(
    {},
    require("./contentCreatorRoutes")(app),
    require("./contentSeriesRoutes")(app),
    require("./contentRoutes")(app),
    require("./knowledgeCategoryRoutes")(app),
    require("./knowledgeSubjectRoutes")(app),
    require("./quizRoutes")(app),
    require("./sourceRoutes")(app),
    require("./topicRoutes")(app)
  );
};
