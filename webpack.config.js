var path = require("path");
var config = {
  context: __dirname + "/src",
  entry: ["./index.tsx"],
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: "ts-loader",
        }]
      }
    ]
  },

  target: "web",
  externals: ["react"],
  serve: {
      port: 3030
  }
};

module.exports = config;