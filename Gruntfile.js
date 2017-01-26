module.exports = function(grunt) {

    // Me aseguro que grunt trabaje con saltos de linea Unix en cualquier OS
    grunt.util.linefeed

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            main: {
                options: {
                    sassDir: "src/scss",
                    cssDir: "dist/css",
                    environment: "development",
                    outputStyle: "nested",
                    sourcemap: true
                }
            },
            dist: {
                options: {
                    sassDir: "src/scss",
                    cssDir: "dist/css",
                    environment: "production"
                }
            }
        },
        clean: {
            main: ['dist/css']
        },
        watch: {
            scripts: {
                files: ['src/**/*'],
                tasks: ['clean','compass:main']
            },
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Register tasks
    grunt.registerTask('default', ['watch']);

};