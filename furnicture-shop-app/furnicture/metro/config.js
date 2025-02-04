// metro.config.js
const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      // Add your paths if you are using custom paths
    },
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],  // Add file extensions for TypeScript and JSX
  },
  watchFolders: [
    path.resolve(__dirname, 'node_modules'), // Ensures metro looks into node_modules folder
  ],
};
