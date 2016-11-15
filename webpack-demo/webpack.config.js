//https://github.com/webpack/webpack/issues/482#issuecomment-56161239

var autoprefixer = require("autoprefixer");
var precss       = require("precss");
var webpack      = require("webpack");

module.exports = {
  debug: true,
  devtool: "source-map",

  entry: {
    app: "./app/"
  },

  output: {
    path: "./app-build",
    filename: "[name].bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    })
  ],

  postcss: function () {
    return [
      autoprefixer({
        browsers: ["last 10 versions"]
      }),
      precss
    ];
  },

  devServer: {
    contentBase: "./app-build",
    hot: true
  }
};
