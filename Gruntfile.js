module.exports = function(grunt) {

    // 1. ≈⁄œ«œ«   ‘€Ì· ﬂ«›… «·„Â«„.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
			dist: {
				src: [
					'js/libs/*.js', // «·„ﬂ »« 
					'js/global.js'  // «·„·› «·–Ì ﬁ„‰« »ﬂ «» Â
				],
				dest: 'js/build/production.js',
			}
		}

    });

    // 2. √”„«¡ «·Õ“„ «· Ì ‰” Œœ„Â«.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 3. ﬁ«∆„… «·„Â«„ «· Ì Ì „  ‘€Ì·Â« ⁄‰œ  ‰›Ì– √„— grunt.
    grunt.registerTask('default', ['concat']);

};