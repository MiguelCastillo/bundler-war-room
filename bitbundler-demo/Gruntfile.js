module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  var pkg = require("./package.json");

  // Load up your tasks in the `tasks` folder.
  var taskConfig = require("config-grunt-tasks")(grunt, "./tasks");

  // Naively set `pkg`. But please feel free to use your merging module of choice
  taskConfig.pkg = pkg;

  // Now just call your grunt initialization step.
  grunt.initConfig(taskConfig);

  grunt.registerTask("build", ["copy", "bitbundler:build"]);
  grunt.registerTask("serve", ["build", "concurrent:build"]);
};
