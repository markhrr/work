var gulp = require('gulp');
var minCss = require('gulp-clean-css');
var minJs = require('gulp-uglify')
var concat = require('gulp-concat')
var connect = require('gulp-connect')
// 合并js文件
gulp.task('concat',function(){
    gulp.src(['./script.js','./js.js'])
    .pipe(concat('./all.js'))
    .pipe(gulp.dest('./js/'))
})
gulp.task('default',['concat'])


// 压缩js
gulp.task('minJs',function(){
    gulp.src('./js/all.js')
    .pipe(minJs())
    .pipe(gulp.dest('./js/minjs/'))
})
gulp.task('default',['minJs'])


// 压缩css
gulp.task('minCss',function(){
    gulp.src('./style.css')
    .pipe(minCss())
    .pipe(gulp.dest('./css/'))
})
gulp.task('default',['minCss']);