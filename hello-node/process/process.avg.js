console.log( process.argv ); // 进程参数[node命令地址，当前文件地址，参数1，参数2， ..]
console.log( process.pid ); // 进程id 
console.log( process.memoryUsage() ); // 内存使用情况
console.log( process.nextTick(() => {}) ); // 进入此次循环的微队列
// console.log( process.chdir() ); // chdir方法用于修改Node.js应用程序中使用的当前工作目录
console.log( process.cwd() ); // 进程当前工作目录
// console.log( process.kill(process.pid) ); // 杀死进程
// process.exitCode = 1;
// process.exit(0);  // 默认为0，如果设置exitCode会为exitCode值

// uncaughtException 事件
say();
process.on('uncaughtException', (err) => {
    console.log( err ); 
} ) // 当应用程序抛出一个未被捕获的异常时触发进程对象的