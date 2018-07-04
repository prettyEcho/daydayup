
/* 
  spawn(command, args, options) 

  适合用在进程的输入、输出数据量比较大的情况（因为它支持以 stream 的使用方式），
  可以用于任何命令。

  参数介绍：
  {
      // 可以指定命令在哪个目录执行
      'cwd': null,
      // 传递环境变量，node 脚本可以通过 process.env 获取到         
      'env': {},
      // 配置子进程的 IO
      'stdio': 'pipe',
      // 为子进程独立运行做好准备
      'detached': false,
      // 指定用户 id
      'uid': 0,
      // 指定组 id
      'gid': 0
  }

  # stdio
   用来配置子进程和父进程之间的 IO 通道，可以传递一个数组或者字符串。比如，['pipe', 'pipe', 'pipe']，分别配置：标准输入、标准输出、标准错误。如果传递字符串，则三者将被配置成一样的值。我们简要介绍其中三个可以取的值：

      * pipe（默认）：父子进程间建立 pipe 通道，可以通过 stream 的方式来操作 IO

      * inherit：子进程直接使用父进程的 IO

      * ignore：不建立 pipe 通道，不能 pipe、不能监听 data 事件、IO 全被忽略

  参考文章：https://segmentfault.com/a/1190000005004946

  执行： cat spawn.txt | node spawn.js
*/
const { spawn } = require('child_process');
const child_p = spawn('node', ['child.js','a','b']);

// 父进程的输入直接 pipe 给子进程（子进程可以通过 process.stdin 拿到）
process.stdin.pipe(child_p.stdin);

// 子进程的输出 pipe 给父进程的输出
child_p.stdout.pipe(process.stdout);

// 子进程的错误输出 pipe 给父进程的错误输出
child_p.stderr.pipe(process.stderr);

// 父进程输入给父进程输出
process.stdin.pipe(process.stdout);

// 通过data监听数据变化
/* child_p.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

child_p.stderr.on('data', (data) => {
  console.log(`错误：${data}`);
});
 */
child_p.on('close', (code) => {
  console.log(`子进程close：${code}`);
});

child_p.on('exit', (code) => {
  console.log(`子进程exit：${code}`);
});

// process.exit(0);

