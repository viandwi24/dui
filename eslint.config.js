// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    // rule for // eslint-disable-next-line @typescript-eslint/no-deprecated
    rules: {
      "@typescript-eslint/no-deprecated": "off",
    },
  },
]);
