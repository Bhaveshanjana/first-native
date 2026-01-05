const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Point NativeWind at the actual global stylesheet under app/
module.exports = withNativeWind(config, { input: "./app/global.css" });
