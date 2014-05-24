module.exports = function (grunt) {

    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        handlebars: {

            compile: {

                options: {
                    namespace: 'templates',
                    processName: function(path) {
                        return path.match(/([^\/]+)\.hbs/)[1];
                    }
                },

                files: {
                    'static/templates/templates.js': ['static/templates/handlebars/**/*.hbs']
                }

            }

        },

        shell: {

            demos: {

                command: 'python build.py > static/demos.js'

            }

        },

        manifest: {

            generate: {

                src: [],

                options: {

                    cache: [

                        'index.html',
                        'stage.html',
                        'demos.js',
                        'play.js',
                        'css/styles.css',
                        'templates/templates.js',
                        'images/scott-pilgrim.png',
                        'images/octocat.png',
                        'images/octocat@2x.png',
                        'libs/facade.min.js',

                        'http://cdn.jsdelivr.net/ace/1.1.3/min/ace.js',
                        'http://cdn.jsdelivr.net/ace/1.1.3/min/mode-javascript.js',
                        'http://cdn.jsdelivr.net/ace/1.1.3/min/worker-javascript.js',
                        'http://cdn.jsdelivr.net/handlebarsjs/1.3.0/handlebars.min.js',
                        'http://cdn.jsdelivr.net/zepto/1.1.3/zepto.min.js'

                    ],
                    network: ['*']
                },

                dest: 'static/manifest.appcache'

            }

        },

        watch: {

            handlebars: {
                files: ['static/templates/handlebars/**/*.hbs'],
                tasks: ['handlebars']
            },

            demos: {
                files: ['static/demos/**/*.js'],
                tasks: ['shell:demos', 'manifest']
            }

        }

    });

    grunt.registerTask('default', [ 'handlebars', 'shell:demos', 'manifest' ]);

};
