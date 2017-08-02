let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let reload = browserSync.reload;



let browserSyncPath = ["*.html"]; // 监视同步路径
let browserSyncRootPath = "./";
let browserSyncIndex = "index.html"; // 服务器启动的时候,默认打开的文件


gulp.task('default', ["browser-sync"], function() {
    console.log("********\n执行了 browser-sync\n********");
});


/**
 * browser-sync
 */
// 静态服务器
gulp.task('server', function() {
    browserSync.init({
        server: browserSyncRootPath
    });
});

// 只根据某个(些)文件更新
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: browserSyncRootPath,
            index:browserSyncIndex
        },
        port: 5000,
        ui: {// ui的默认端口
            port: 5001,
            weinre: { // 不知道什么鬼 "weinre"好像也是用于远程调试的nodejs工具
                port: 5002
            }
        }
    });
    gulp.watch(browserSyncPath).on("change", reload);
});
