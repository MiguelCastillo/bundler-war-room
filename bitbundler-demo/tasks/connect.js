var fallback = require("connect-history-api-fallback");
var livereload = require("connect-livereload");

module.exports = {
  keepalive: {
    options: {
      // protocol: "http2", // or "https"

      port: 2020,
      host: "localhost",
      keepalive: true,
      open: "http://localhost:2020/site-build/index.html",
      middleware: function(connect, options, middlewares) {
        middlewares.unshift(fallback({ index: "/site-build/index.html" }));
        middlewares.unshift(livereload({ port: 32011 }));
        return middlewares;
      }
    }
  }
};
