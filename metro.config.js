const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
const { withMonicon } = require("@monicon/metro");
 
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// console.log("Metro config:", config);

 
module.exports = withMonicon(
  withNativewind(config),
  {
    icons: [],
    collections: ["ph"],
  }
);