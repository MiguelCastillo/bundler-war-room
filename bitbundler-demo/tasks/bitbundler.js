var Bitbundler = require("bit-bundler");
var babelPlugin = require("bit-loader-babel");
var depsPlugin = require("bit-loader-js");
var cssPlugin = require("bit-loader-css");
var splitJSBundle = require("bit-bundler-splitter");
var eslintPlugin = require("bit-eslint");
var builtinsPlugin = require("bit-loader-builtins");
var cachePlugin = require("bit-loader-cache");

module.exports = {
  build: {
    Bitbundler: Bitbundler,
    watch: true,
    files: [{
      src: ["site/main.js"]
    }],
    loader: {
      plugins: [
        eslintPlugin(),
        cssPlugin(),
        depsPlugin(),
        babelPlugin({
          options: {
            sourceMap: "inline"
          }
        }),
        builtinsPlugin(),
        cachePlugin()
      ]
    },
    bundler: {
      plugins: [
        splitJSBundle("site-build/vendor.js", { match: { path: [/node_modules/, /three\.bootstrap\.js$/] } }),
        splitJSBundle("site-build/app.js", { match: { path: /site\/main\.js$/ } })
        // splitCSSBundle("site-build/styles.js", { match: { path: /.css$/ } })
      ]
    }
  }
};
