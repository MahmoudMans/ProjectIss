const webpack = require("webpack");

module.exports = {
  resolve: {
    alias: {
      process: "process/browser",
    },
    fallback: {
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      util: require.resolve("util/"),
      buffer: require.resolve("buffer/"),
    },
    extensions: [".jsx", ".js", ".json", ".css"],
    modules: ["node_modules"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
