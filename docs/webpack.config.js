var path = require('path')

module.exports = {
    // webpack folder’s entry js — excluded from jekll’s build process.
    mode: "development",
    entry: "./webpack/entry.js",
    output: {
      // we’re going to put the generated file in the assets folder so jekyll will grab it.
      // if using GitHub Pages, use the following:
      // path: "assets/javascripts"
      path: path.resolve(__dirname, "./assets/javascripts/"),
      filename: "bundle.js"
    },
    module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader", // "babel-loader" is also a legal name to reference
        options: {
          presets: ["react", "env"]
        }
      }
      ]
    }
  };
