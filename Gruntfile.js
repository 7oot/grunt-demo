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
		},
		uglify: {
			build: {
				src: 'js/build/production.js', // المصدر - ناتج المهمة السابقة
				dest: 'js/build/production.min.js' // مسار الملف المضغوط
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed' // نمط الخرج مضغوط
				},
				files: {
					'css/build/global.css': 'css/global.scss'
				}
			} 
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		},
		watch: {
			scripts: {
				files: ['js/*.js'], // لسنا بحاجة لمرافبة المكتبات
				tasks: ['concat', 'uglify'], // المهمات التي ستنفذ
				options: {
					spawn: false, // لا تسألني عن هذا
				},
			},
			css: {
				files: ['css/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			},
			images: {
				files: ['images/*.{png,jpg,gif}'],
				tasks: ['imagemin'],
				options: {
					spawn: false,
				}
			}
		}

    });

    // 2. أسماء الحزم التي نستخدمها.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	

    // 3. قائمة المهام التي يتم تشغيلها عند تنفيذ أمر grunt.
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin']);

};