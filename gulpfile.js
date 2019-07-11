const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const webpack = require('webpack-stream');

// let docs = 'docs'

let WBConfig = {
    // mode: 'development',
    mode: 'production',
    output: {
         filename: 'scrypt.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'  
            }
        ]
    }
}

function cleanImg(){
    return del(['./src/img/*']);
}
function clean(){
    // return del(['!docs/img, docs/*']);
    return del(['docs/*']);
}
function getImg(){
    return  gulp.src('./src/img/*')
                .pipe(imagemin())
                .pipe(gulp.dest('./src/static/img'));
}
function staticImg() {
    return  gulp.src('./src/static/img/*')
            .pipe(gulp.dest('./docs/img'));
}
function getFonts() {
    return  gulp.src('./src/static/fonts/*')
            .pipe(gulp.dest('./docs/fonts'));
}
function scrypts(){
    return  gulp.src('./src/js/scrypt.js')
                .pipe(webpack(WBConfig))
                .pipe(gulp.dest('./docs/js'))
                .pipe(browserSync.stream());
}
function style(){
    return  gulp.src('./src/sass/style.sass')
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ['> 0.1%'],
                    grid: true,
                    cascade: false
                }))
                .pipe(cleanCSS({
                    level: 2,
                    // format: 'beautify',
                    // format: {
                    //     breaks: { 
                    //       afterRuleEnds: true
                    //     }
                    // }  
                }))
                .pipe(gulp.dest('./docs/css'))
                .pipe(browserSync.stream());
}
function getHtml(){
    return  gulp.src('./src/index.pug')
                .pipe(pug({
                    pretty:true
                }))
                .pipe(gulp.dest('./docs'))      
                .pipe(browserSync.stream());
}
function watch(){
    browserSync.init({
        server: {
            baseDir: './docs'
        }
    });
    gulp.watch('./src/**/*.pug', getHtml, browserSync.reload);
    gulp.watch('./src/**/*.+(sass|scss)', style);
    gulp.watch('./src/blocks/**/*.js', scrypts);
}




gulp.task('style', style);
gulp.task('getHtml', getHtml);
gulp.task('scrypts', scrypts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean,getImg,
                    gulp.parallel(
                        cleanImg,
                        getHtml, 
                        style, 
                        scrypts,
                        staticImg,
                        getFonts
                        )
                    ));

gulp.task('dev', gulp.series('build', 'watch'));