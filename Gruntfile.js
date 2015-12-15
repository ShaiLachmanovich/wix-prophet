module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        uglify: {
            all: {
                files: {
                    'dest/wix-prophet.min.js': ['src/**/*.js']
                }
            }

        },
        eslint: {
            options: {
                configFile: 'config.eslintrc'
            },
            all: {
                src: ["src/**/*.js"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("gruntify-eslint");

    grunt.registerTask('default', ['uglify', 'eslint']);
};

