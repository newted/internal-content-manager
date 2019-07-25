module.exports = app => {
  Object.assign(
    {},
    require("./contentCreatorRoutes")(app),
    require("./contentModuleRoutes")(app),
    require("./contentRoutes")(app),
    require("./knowledgeGroupRoutes")(app),
    require("./knowledgeMapRoutes")(app),
    require("./sourceRoutes")(app)
  );
};
