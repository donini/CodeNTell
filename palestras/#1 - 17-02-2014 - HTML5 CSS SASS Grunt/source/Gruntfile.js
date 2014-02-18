module.exports = function(grunt){

	'use strict';

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		sass:   {
			all: {
				files: 
				[{
					expand: true,
					cwd: 'assets/sass/',
					src: ['*.scss'],
					dest: 'assets/css/',
					ext: '.css'
				}]
			}
		},
		watch:{
			options:{
				livereload: true
			},
			livereload:{
				files: ['assets/sass/*.scss'],
				tasks: ['sass']
			}
		}
	});
}