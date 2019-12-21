module.exports = function (grunt) {

  grunt.initConfig({
    clean: ['dist/'],
    copy: {
      main: {
        files: {
          "dist/img/cover.jpg": "static/img/landing-sadcat-02.jpg",
          "dist/favicon.ico": "favicon.ico"
        },
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          sortAttributes: true,
          sortClassName: true
        },
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },
    cssmin: {
      options: {},
      target: {
        files: {
          'dist/css/styles.min.css': ['css/styles.css', 'css/themes/white-grey-sadcat.css', 'css/visible.css'],
          'dist/css/reset.min.css': ['css/reset.css']
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'copy', 'htmlmin', 'cssmin'])

}