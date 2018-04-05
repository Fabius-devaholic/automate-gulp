'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import rollup from 'rollup-stream'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import connect from 'gulp-connect'
import postcss from 'gulp-postcss'
import gulpStylelint from 'gulp-stylelint'
import eslint from 'gulp-eslint'


/* Set up directories */
// Root Dir
const rootDir = '.'

//Resource paths
const resourcesDir = rootDir + '/src'
const resourceStyles = resourcesDir + '/styles'
const resourceAssets = resourcesDir + '/assets'
const resourceScripts = resourcesDir + '/scripts'
const resourceVendors = resourcesDir + '/vendors'

//Dist paths
const distDir = rootDir + '/dist'
const distStyles = distDir + '/styles'
const distAssets = distDir + '/assets'
const distScripts = distDir + '/scripts'
const distVendors = distDir + '/vendors'

gulp.task('log', () => {
  gutil.log('=== log task ===')
})


gulp.task('connect', function() {
  connect.server({
    host: '0.0.0.0',
    port: 3000,
    name: 'Automate Gulp',
    livereload: true
  })
  connect.serverClose()
})

/**
 * compile SASS to CSS
 * @return {[type]}   [description]
 */
gulp.task('styles', () => {
  gutil.log('running styles task')
  return gulp.src(resourceStyles + '/main.scss')
    .pipe(gulpStylelint())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', gutil.log)
    .pipe(postcss())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(distStyles))
    .pipe(connect.reload())
})

/**
 * compile ES6 to pure Javascript
 * @return {[type]} [description]
 */
gulp.task('scripts', () => {
  gutil.log('running scripts task')

  return rollup({
    input: resourceScripts + '/main.js',
    format: 'es'
  })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(eslint())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(distScripts))
    .pipe(connect.reload())
})

/**
 * Copy assets
 * @return {[type]} [description]
 */
gulp.task('assets', () => {
  return gulp.src(resourceAssets + '/**/*')
    .pipe(gulp.dest(distAssets))
})

/**
 * Copy vendors
 * @return {[type]} [description]
 */
gulp.task('vendors', () => {
  return gulp.src(resourceVendors + '/**/*')
    .pipe(gulp.dest(distVendors))
})

/**
 * Watch files changes
 */
gulp.task('watch', () => {
  gulp.watch(resourceStyles + '/**/*', ['styles'])
  gulp.watch(resourceScripts + '/**/*', ['scripts'])
})

gulp.task('default', ['connect', 'scripts', 'styles', 'assets', 'vendors', 'watch'])
gulp.task('build', ['scripts', 'styles', 'assets', 'vendors'])