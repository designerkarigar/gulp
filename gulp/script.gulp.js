const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const clone = require('gulp-clone');
const merge = require('merge-stream');

const {
  paths,
  baseDir,
  browserSync: { reload }
} = require('./utils.js');

/* -------------------------------------------------------------------------- */
/*                             JavaScript Compile                             */
/* -------------------------------------------------------------------------- */

gulp.task('script', () => {
  /* ------------------------------ Theme script ------------------------------ */

  const sourceStream = gulp.src(paths.script.src);
  const jsStream = sourceStream
    .pipe(clone())
    .pipe(sourcemaps.init())
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(concat('theme.js'))
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel());

  const compressedStream = jsStream.pipe(clone()).pipe(uglify()).pipe(rename('theme.min.js'));

  return merge(
    jsStream,
    compressedStream
  )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${baseDir}/${paths.script.dest}`))
    .on('end', () => {
      reload();
    });
});
