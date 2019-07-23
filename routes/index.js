module.exports = app => {
  Object.assign(
    {},
    require("./contentCreatorRoutes")(app),
    require("./contentModuleRoutes")(app),
    require("./contentRoutes")(app),
    require("./knowledgeMapRoutes")(app),
    require("./sourceMapRoutes")(app)
  );
};