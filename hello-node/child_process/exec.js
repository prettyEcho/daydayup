/* 
    exec:
        child_process.exec(command, options, (err, stdout, stderr))

    首先创建一个新的 shell 进程出来，然后执行 command

    exec/execFile使用一个 Buffer 来存储进程执行后的标准输出结果，们可以一次性在 callback 里面获取到。不太适合输出数据量大的场景。
*/

const { exec } = require('child_process')

let child_p = exec('node child.js a -b', {}, (err, stdout, stderr) => {
    if (err) {
        // err.code 是进程退出时的 exit code，非 0 都被认为错误
        // err.signal 是结束进程时发送给它的信号值
        console.log('err:', err, err.code, err.signal);
      }
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
})

console.log('child pid:', child_p.pid);