module.exports = function(grunt) {

    // 1. ������� ����� ���� ������.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
			dist: {
				src: [
					'js/libs/*.js', // ��������
					'js/global.js'  // ����� ���� ���� �������
				],
				dest: 'js/build/production.js',
			}
		}

    });

    // 2. ����� ����� ���� ��������.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 3. ����� ������ ���� ��� ������� ��� ����� ��� grunt.
    grunt.registerTask('default', ['concat']);

};