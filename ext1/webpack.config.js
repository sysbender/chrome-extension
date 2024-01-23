import path from "path";
import { glob } from "glob";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

const config = {
  // entry: glob.sync("./src/**/*.js").reduce(function (obj, el) {
  //   obj[path.parse(el).name] = el;
  //   return obj;
  // }, {}),
  entry: {
    background: "./src/background.js",
    content: "./src/content.js",
    contentRequest: "./src/contentRequest.js",
    contentMessaging: "./src/contentMessaging.js",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/popup.html",
      filename: "popup.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/options/options.html",
      filename: "options/options.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: ".", // Copies to build folder
        },
        // {
        //   from: "src/popup.css",
        //   to: "popup.css",
        // },
      ],
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
    },
  },
};

export default config;
