let gulp = require('gulp');
let browserSync = require('browser-sync').create();

/**
 * 静态服务器
 */
function server() {
    return browserSync.init({
        server: {
            baseDir: "./web",
            index: "/index.html",
            middleware: []
        },
        port: 5000,
        ui: { // ui的默认端口
            port: 5001,
            weinre: { // 不知道什么鬼 "weinre"好像也是用于远程调试的nodejs工具
                port: 5002
            }
        }
    });
}

/**
 * 监测 html 变化的时候 reload
 */
function reload() {
    return gulp.watch(["web/*.html"]).on("change", function(event) {
        console.log(event + " change")
        try {
            gulp.src(event).pipe(browserSync.reload({
                stream: true
            }));
        } catch (error) {
            console.error(error);
        }
    });
}


exports.default = gulp.series(gulp.parallel(server, reload)); // 默认，直接 npx gulp 运行