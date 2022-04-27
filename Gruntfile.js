module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: 'dist',
          keepalive: true,
          livereload: true,
          port: 8080
        }
      }
    },
    clean: ['dist/'],
    copy: {
      main: {
        files: {
          "dist/img/cover.jpg": "static/img/landing-sadcat-02.jpg",
          "dist/favicon.ico": "favicon.ico",
          "dist/img/jupyter-notebook.svg": "static/img/jupyter-notebook.svg"
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
          'dist/index.html': 'index.html',
          'dist/404.html': '404.html',
          'dist/50x.html': '50x.html'
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
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['clean', 'copy', 'htmlmin', 'cssmin'])
  grunt.registerTask('serve', ['default', 'connect'])

}
