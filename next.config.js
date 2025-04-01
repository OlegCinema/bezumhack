const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/,
      type: 'asset/resource', // Ensures .mp3 files are treated as assets
    });
    return config;
  },
};

module.exports = nextConfig;
