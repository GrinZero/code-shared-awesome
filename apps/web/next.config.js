const withTM = require("next-transpile-modules")(["ui", "api-sdk"]);

module.exports = withTM({
  reactStrictMode: true,
});
