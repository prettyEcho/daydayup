/* 
    fork(modulePath, args, options) 

    实际上是 spawn 的一个“特例”，会创建一个新的 V8 实例，新创建的进程只能用来运行 Node 脚本，不能运行其他命令。
    并且会在父子进程间建立 IPC 通道，从而实现进程间通信。

    通过监听 message 事件和调用 send 方法，我们就可以在父子进程间进行通信了。
*/

// parent.js

const child_process = require('child_process')
const p = child_process.fork(
    'child1.js', // 需要执行的脚本路径
    ['a', 'b'], // 传递的参数
    {}
);
console.log('child pid:', p.pid);

p.on('exit', code => {
    console.log('exit:', code);
});

p.on('message', m => {
    console.log( `message from child: ${m}`);

    // 向子进程发送信号量
    p.kill('SIGTERM');
})

p.send('send from parent');

p.on('exit', code => {
    console.log( `exit code is : ${code}` );
})

p.on('close', code => {
    console.log( `exit close is : ${code}` );
})