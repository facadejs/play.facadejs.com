module.exports = function (grunt) {

    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        shell: {

            demos: {

                command: 'python build.py > static/demos.js'

            }

        },

        manifest: {

            generate: {

                src: [
                    'index.html',
                    'stage.html',
                    'css/styles.css',
                    'demos.js',
                    'play.js',
                    'images/scott-pilgrim.png',
                    'libs/facade.min.js',
                ],

                options: {
                    cache: [
                        'http://cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js',
                        'http://cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/mode-javascript.js',
                        'http://cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/worker-javascript.js',
                        'http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.2/handlebars.min.js',
                        'http://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.3/zepto.min.js',
                    ],
                    network: ['*']
                },

                dest: 'static/manifest.appcache'

            }

        },

        watch: {

            demos: {
                files: ['static/demos/**/*.js'],
                tasks: ['shell:demos', 'manifest']
            }

        }

    });

    grunt.registerTask('default', [ 'shell:demos', 'manifest' ]);

};
