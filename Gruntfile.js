module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
		copy: {
			copytodist: {
				files: [
                    {expand: true, cwd: 'font/fonts/', src: '**/*', dest: 'dist/fonts'},
                    {expand: true, cwd: 'font/', src: 'style.css', dest: 'dist', rename: function(dest, src) {
                        return dest + '/automizy-icon-set.css';
                    }}
				]
			}
		},
        compress: {
            main: {
                options: {
                    archive: 'dist/automizy-icon-set.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd : "dist/",
                        src: [
                            './fonts/**',
                            '*.css',
                            '*.map'
                        ]
                    }
                ]
            }
        }
    });

	grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask("default", ["copy:copytodist", "compress"]);
    grunt.registerTask("bower", ["copy"]);
};

