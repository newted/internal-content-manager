module.exports = app => {
  Object.assign(
    {},
    require("./contentCreatorRoutes")(app),
    require("./contentModuleRoutes")(app),
    require("./contentRoutes")(app),
    require("./knowledgeCategoryRoutes")(app),
    require("./knowledgeSubjectRoutes")(app),
    require("./sourceRoutes")(app)
  );
};
