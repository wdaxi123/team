var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('./mock/data')
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 6060,
            middleware: function(req, res, next) {
                if (req.url === "/favicon.ico") {
                    return;
                }
                var pathname = require('url').parse(req.url).pathname;
                pathname = pathname === '/' ? '/index.html' : pathname;
                if (/\/api\//.test(pathname)) {
                    res.end(JSON.stringify(data));
                } else {
                    res.end(require('fs').readFileSync(require('path').join(__dirname, 'src', pathname)));
                }
            }
        }))
});

gulp.task('default', ['server'])