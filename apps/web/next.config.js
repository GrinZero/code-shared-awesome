const withTM = require("next-transpile-modules")(["ui", "api-sdk"]);

module.exports = withTM({
  reactStrictMode: true,
  basePath: "/code-shared-awesome",
  assetPrefix: "/code-shared-awesome/",
});
