module.exports = function(grunt) {

    // 1. إعدادات تشغيل كافة المهام.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
			dist: {
				src: [
					'js/libs/*.js', // المكتبات
					'js/global.js'  // الملف الذي قمنا بكتابته
				],
				dest: 'js/build/production.js',
			}
		}

    });

    // 2. أسماء الحزم التي نستخدمها.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 3. قائمة المهام التي يتم تشغيلها عند تنفيذ أمر grunt.
    grunt.registerTask('default', ['concat']);

};