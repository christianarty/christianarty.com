const withPlugins = require("next-compose-plugins");

const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  target: "serverless",
};

module.exports = withPlugins([], nextConfig);
