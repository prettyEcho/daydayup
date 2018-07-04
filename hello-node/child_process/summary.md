* exec / execFile：使用 Buffer 来存储进程的输出，可以在回调里面获取输出结果，不太适合数据量大的情况；可以执行任何命令；不创建 V8 实例

* spawn：支持 stream 方式操作输入输出，适合数据量大的情况；可以执行任何命令；不创建 V8 实例；可以创建常驻的后台进程

* fork：spawn 的一个特例；只能执行 Node 脚本；会创建一个 V8 实例；会建立父子进程的 IPC 通道，能够进行通信