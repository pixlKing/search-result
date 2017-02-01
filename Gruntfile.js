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
                    outputStyle: "compressed",
                    environment: "production"
                }
            }
        },

        clean: {
            main: ['dist/css']
        },

        copy: {
            main: {
                files: [
                    {// Copia las imagenes generales
                        expand: true,
                        cwd: 'src/img/',
                        src: ['**'],
                        dest: "dist/img/"
                    },
                    {// Copia las fuentes para icons
                        expand: true,
                        cwd: 'src/fonts/',
                        src: ['**'],
                        dest: "dist/fonts/"
                    },
                    {// Copia los js
                        expand: true,
                        cwd: 'src/js/',
                        src: ['**'],
                        dest: "dist/js/"
                    },
                    {//copia views
                        expand: true,
                        cwd: 'src/views/',
                        src: ['**'],
                        dest: "dist/views/"
                    }
                ]
            },
        },


        watch: {
            scripts: {
                files: ['src/**/*'],
                tasks: ['clean','copy','compass:main']
            },
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Register tasks
    grunt.registerTask('default', ['build','watch']);
    grunt.registerTask('build', ['clean','copy','compass:main']);
    grunt.registerTask('dist', ['clean','copy','compass:dist']);

};
