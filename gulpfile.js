'use strict';
let gulp = require('gulp');
let ts = require('gulp-typescript');
let nodemon = require('gulp-nodemon');

gulp.task('copy_assets', () => {
	return gulp.src(['./src/**/*', '!./**/*.ts'])
		.pipe(gulp.dest('dist'));
});

gulp.task('compile_ts', () => {
	var tsProject = ts.createProject('src/app/tsconfig.json');
	return tsProject.src()
		.pipe(ts(tsProject))
		.pipe(gulp.dest('dist/app'));
});

gulp.task('start', () => {
	nodemon({
		script: 'server.js',
		ext: 'js',
		watch: [
			'src/app/main.js',
			'modules/*'
		] // we only watch 1 file because everything gets recompiled on save.
  })
});

gulp.task('watch', ['start'], () => {
	gulp.watch('src/app/**/*', ['copy_assets','compile_ts']);
});