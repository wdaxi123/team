var gulp = require("gulp");
var server = require("gulp-webserver");
var url = require("url");
var data = require("./src/mock/data.json");
console.log(data);
var fs = require('fs');
var path = require('path');
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 5050,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === "/favicon.ico") {
                    return;
                }
                var pathname = url.parse(req.url, true).pathname;
                pathname = pathname === "/" ? "/index.html" : pathname;
                console.log(pathname)
                    // res.end(JSON.stringify(data));
                    //res.end(fs.readFileSync(path.join(__dirname, "src", pathname)));
                if (/\/api\//.test(pathname)) {
                    res.end(JSON.stringify(data));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)));
                }

            }
        }))
})