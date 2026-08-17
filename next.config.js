const path = require('path');

module.exports = {
  /**
   * Tell Next.js to generate a static site that can be hosted anywhere.
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: 'export',

  /** Disable server-based image optimization. Next.js will export original images. */
  images: { unoptimized: true },

  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};