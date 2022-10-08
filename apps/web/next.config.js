const withTM = require("next-transpile-modules")(["ui", "api-sdk"]);

module.exports = withTM({
  reactStrictMode: true,
  basePath:
    process.env.NODE_ENV === "development" ? "" : "/code-shared-awesome",
  assetPrefix:
    process.env.NODE_ENV === "development" ? "" : "/code-shared-awesome",
});
