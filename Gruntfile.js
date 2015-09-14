/**
 * Created by zink1 on 06/09/2015.
 */

module.exports = function(grunt){
    "use strict";
    grunt.initConfig({
        nodemon: {
            dev: {
                script: 'bin/www'
            }
        }

    });
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['nodemon']);
}