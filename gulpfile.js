var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var shell = require('gulp-shell');
var opn = require('opn');
var runSequence = require('run-sequence');
var tinylr;

var config = {
    servingPort: 8080,
    livereLoadPort: 35729,

    jsDoc: __dirname + '/node_modules/.bin/jsdoc',
    jsDocConf: __dirname + '/config/conf.json',
    jsDocTpl:  'template',
    jsDocDest: 'demo/docs',
    jsDocSrc: ['demo/sample'],

    readme: __dirname + '/README.md',
    jsDocParams: ['-r', '-p'],
};

function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);

    tinylr.changed({
        body: {
            files: [fileName]
        }
    });

    console.log('Files changed: ' + fileName);
}

function jsDocCmd(opts) {
    var jsDoc = opts.jsDoc,
        conf = '-c ' + opts.jsDocConf,
        tpl = '-t ' + opts.jsDocTpl,
        src = opts.jsDocSrc.join(' '),
        readme = opts.readme,
        dest = '-d ' + opts.jsDocDest,
        params = opts.jsDocParams.join(' ');

    return [jsDoc, src, params, readme, conf, dest, tpl].join(' ') + ' > dump.json';
}

gulp.task('less', function () {
    return gulp.src('template/less/**/ui.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('template/static/styles'));
});

gulp.task('js-doc', shell.task(
    [jsDocCmd(config)]
));

gulp.task('express', function() {
    var express = require('express');
    var app = express();
    app.use(require('connect-livereload')({port: config.livereLoadPort}));
    app.use(express.static(__dirname));
    app.listen(config.servingPort, '0.0.0.0');
});

gulp.task('livereload', function() {
    tinylr = require('tiny-lr')();
    tinylr.listen(config.livereLoadPort);
});

gulp.task('serve', ['express', 'livereload'], function () {
  opn('http://localhost:' + config.servingPort + '/demo/docs');
});

gulp.task('copy-css', function () {
    gulp.src('template/static/styles/ui.css')
        .pipe(gulp.dest(config.jsDocDest + '/styles'));
});

gulp.task('copy-js', function() {
    gulp.src('template/static/scripts/main.js')
        .pipe(gulp.dest(config.jsDocDest + '/scripts'));
});

gulp.task('watch', function() {
    gulp.watch('demo/sample/*.js', ['js-doc']);
    gulp.watch('template/publish.js', ['js-doc']);
    gulp.watch('config/conf.json', ['js-doc']);
    gulp.watch('template/tmpl/*.tmpl', ['js-doc']);
    gulp.watch('template/static/scripts/main.js', ['copy-js'])
    gulp.watch('template/less/*.less', function() {
        runSequence('less', 'copy-css');
    });

    gulp.watch(config.jsDocDest + '/**/*.js', notifyLiveReload);
    gulp.watch(config.jsDocDest + '/**/*.html', notifyLiveReload);
    gulp.watch(config.jsDocDest + '/**/*.css', notifyLiveReload);
});

gulp.task('docs', ['js-doc']);
gulp.task('dev', ['watch', 'serve']);
gulp.task('demo', function() {
    runSequence('less', 'js-doc');
});