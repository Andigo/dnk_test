let gulp = require('gulp');
let less = require('gulp-less');
const del = require('del');
let htmlincluder = require('gulp-htmlincluder');
let prefixer = require('gulp-autoprefixer');
let uglifycss = require('uglifycss');
let concat = require('gulp-concat');
let browserSync = require('browser-sync').create();
let rigger = require('gulp-rigger');


// сборка стилевых файлов less
function styles() {
  return gulp.src('./src/less/general.less')  	
    .pipe(less())
    .pipe(prefixer({
            cascade: false
        }))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

//сборка html
function html() {
    return gulp.src('src/html/**/*.html')
        .pipe(concat('index.html'))
        .pipe(gulp.dest('build/'));
    //return gulp.src('./src/html/**/*.html')
    	//.pipe(includer())
        //.pipe(gulp.dest('build/'));
}

//JS

function scripts() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.stream());
}

function clear(){
	return del(['build/*']);
}

gulp.task('clean', function(){
	return uglifycss.processFiles(
    	[ 'build/css/general.css', 'build/css/general.css' ],
    	{ maxLineLen: 500, expandVars: true }
	);
});

function watch(){
     browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
	gulp.watch('./src/less/**/*.less', styles);
	gulp.watch('./src/html/**/*.html', html);
	gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/html/**/*.html', browserSync.reload);
}


gulp.task('styles', styles);
gulp.task('html', html);
gulp.task('scripts', scripts)
gulp.task('watch', watch);
gulp.task('del', clear);
gulp.task('default', 
                gulp.series( 
                    gulp.parallel('html', 'scripts', 'styles', 'watch'))

    );