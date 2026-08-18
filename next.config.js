const path = require('path');

module.exports = {
  output: 'export',
  pages: 'src',  // Add this line
  images: { unoptimized: true },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};