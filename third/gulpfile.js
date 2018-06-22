var gulp = require('gulp');

var data = require('./mock/data.json')
var url = require('url');
var fs = require('fs');
var path = require('path');

var server = require('gulp-webserver');


gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 6060,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === "/favicon.ico") {
                    return;
                }
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? '/index.html' : pathname;
                if (/\/api\//.test(pathname)) {
                    res.end(JSON.stringify(data));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
});

gulp.task('default', ['server'])