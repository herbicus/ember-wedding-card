/**
 * Merges all stylus and css files into one css file.
 * @tasks/styles
 */

'use strict';

var csso = require('gulp-csso');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

/**
 * @param gulp - function
 * @param bs - Browser sync instance
 * @param options - object
 * options.entry : Path to the entry stylus or css file.
 * options.dist : Destination directory for file output.
 * @param flags - object
 * flags.minify : boolean
 * flags.sourcemap : boolean
 * @returns {Function}
 *
 * Note: if you pass flags.minify and flags.sourcemap both as true
 * then line numbers from the orginal files are injected but no minification happens.
 */
module.exports = function( gulp, bs, options, flags ) {

  return function() {

    return gulp.src( options.entry )
      .pipe(sass().on('error', sass.logError))
      .pipe(sass({ sourceComments: 'map'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(flags.sourcemap ? gutil.noop() : csso())
      .pipe(gulp.dest(options.dist))
      .pipe(bs.stream());

  };

};

