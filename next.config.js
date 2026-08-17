const path = require('path');

module.exports = {
  // ... any other configurations you might have
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};