const path = require('path'); // 👈 import path

module.exports = {
  staticDirs: ['../public'],
  "typescript": {
    "check": false,
    "checkOptions": {},
    "reactDocgen": "react-docgen-typescript",
    "reactDocgenTypescriptOptions": {
      "shouldExtractLiteralValuesFromEnum": true,
      "propFilter": (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      }
    }
  },
  "stories": [
    "../components/**/*.stories.tsx",
    "../components/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next"

  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components/*": path.resolve(__dirname, "../components/*"),
      "@components": path.resolve(__dirname, "../components"),
      "@styles/*": path.resolve(__dirname, "../styles/*"),
      "@styles": path.resolve(__dirname, "../styles"),
      "@public/*": path.resolve(__dirname, "../public/*"),
      "@public": path.resolve(__dirname, "../public"),
      "@interfaces": path.resolve(__dirname, "../interfaces"),
      "@interfaces/*": path.resolve(__dirname, "../interfaces/*"),
      "@types/*": path.resolve(__dirname, "../types/*"),
      "@types": path.resolve(__dirname, "../types"),
      "@assets/*": path.resolve(__dirname, "../assets/*"),
      "@utils/*": path.resolve(__dirname, "../utils/*"),
      "@data/*": path.resolve(__dirname, "../data/*"),
      "@hooks": path.resolve(__dirname, "../hooks"),
      "@hooks/*": path.resolve(__dirname, "../hooks/*"),
      "@recoil/*": path.resolve(__dirname, "../recoil/*"),
      "@recoil": path.resolve(__dirname, "../recoil"),
      "@config/*": path.resolve(__dirname, "../config/*"),
      "@context/": path.resolve(__dirname, "../context/"),
      "@context/*": path.resolve(__dirname, "../context/*"),
    };

    return config;
  }
}
