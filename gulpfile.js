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
        }
    });
    gulp.watch(browserSyncPath).on("change", reload);
});
