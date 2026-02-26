// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
const { withMonicon } = require("@monicon/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
const withNativewindConfig = withNativewind(config);
// const withMoniconConfig = withMonicon(withNativewind(config));
const withMoniconConfig = withMonicon(withNativewindConfig, {
  icons: [],
  collections: ["ph"],
});

module.exports = withMoniconConfig;
